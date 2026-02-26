// scripts/optimize-images.js
// Converts all .jpg and .png files in public/images/ to .webp (quality 85, max 1920px wide)

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGE_DIR = path.join(__dirname, "../public/images");
const QUALITY = 85;
const MAX_WIDTH = 1920;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// Recursively find all .jpg and .png files under a directory
function findImages(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertImage(srcPath) {
  const ext = path.extname(srcPath);
  const destPath = srcPath.replace(new RegExp(`${ext}$`, "i"), ".webp");

  const srcSize = fs.statSync(srcPath).size;

  const image = sharp(srcPath);
  const meta = await image.metadata();

  // Resize only if wider than MAX_WIDTH
  const pipeline =
    meta.width && meta.width > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;

  await pipeline.webp({ quality: QUALITY }).toFile(destPath);

  const destSize = fs.statSync(destPath).size;
  const saving = (((srcSize - destSize) / srcSize) * 100).toFixed(1);
  const resized = meta.width && meta.width > MAX_WIDTH ? ` [resized ${meta.width}→${MAX_WIDTH}px]` : "";

  console.log(
    `  ✓ ${path.relative(IMAGE_DIR, srcPath).padEnd(50)} ${formatBytes(srcSize).padStart(9)} → ${formatBytes(destSize).padStart(9)}  (${saving}% smaller)${resized}`
  );
}

async function main() {
  console.log(`\nScanning: ${IMAGE_DIR}\n`);
  const images = findImages(IMAGE_DIR);

  if (images.length === 0) {
    console.log("No .jpg or .png files found.");
    return;
  }

  console.log(`Found ${images.length} image(s) to convert:\n`);

  let totalSrcSize = 0;
  let totalDestSize = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const destPath = imgPath.replace(new RegExp(`${ext}$`, "i"), ".webp");

    try {
      await convertImage(imgPath);
      totalSrcSize += fs.statSync(imgPath).size;
      totalDestSize += fs.statSync(destPath).size;
    } catch (err) {
      console.error(`  ✗ Failed: ${imgPath}\n    ${err.message}`);
    }
  }

  const totalSaving = (((totalSrcSize - totalDestSize) / totalSrcSize) * 100).toFixed(1);
  console.log(
    `\nTotal: ${formatBytes(totalSrcSize)} → ${formatBytes(totalDestSize)} (${totalSaving}% saved)\n`
  );
}

main();
