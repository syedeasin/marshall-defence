// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Marshall Defense`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Marshall Defense`,
      description: product.description.slice(0, 160),
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      {/* ═══ BREADCRUMB ═══ */}
      <div className="pt-28 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center flex-wrap text-p5 tracking-p font-normal text-n4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 text-n4">/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="mx-1 text-n4">/</span>
          <Link href="/products" className="hover:text-white transition-colors">{product.category}</Link>
          <span className="mx-1 text-n4">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* ═══ PRODUCT DETAIL — 2 COLUMNS ═══ */}
      <section className="py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16">

          {/* ── LEFT: Images ── */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-n9 border border-white/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Thumbnails — only if gallery has images */}
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden bg-n9 border border-white/5 cursor-pointer hover:border-primary/30 transition-colors"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-h3 md:text-h2 tracking-h3 md:tracking-h2 font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-p4 tracking-p font-normal text-n3 mb-8">
              {product.description}
            </p>

            {/* Specs table */}
            {product.specs.length > 0 && (
              <div className="border-t border-white/5 pt-6 mt-2 mb-8">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-none">
                        <td className="py-3 pr-8 text-p5 tracking-p font-normal text-n4 w-[140px]">
                          {spec.label}:
                        </td>
                        <td className="py-3 text-p5 tracking-p font-medium text-white">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-white/5 pt-8 mt-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white uppercase font-semibold text-btn2 tracking-btn2 py-[18px] px-7 hover:opacity-90 transition-opacity"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOWNLOAD PRODUCT DETAILS ═══ */}
      {product.pdfs.length > 0 && (
        <>
          <div className="border-t border-white/5" />
          <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white text-center mb-10">
              Download Product Details
            </h2>
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
              {product.pdfs.map((pdf, i) => (
                <a key={i} href={pdf.url} download className="bg-n9 rounded-xl px-6 py-5 flex items-center justify-between group">
                  <span className="text-p4 tracking-p font-medium text-white">{pdf.label}</span>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Download size={20} className="text-n4 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ═══ RELATED PRODUCTS ═══ */}
      {related.length > 0 && (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="inline-flex items-center gap-1 mb-3">
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
            <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">Related Products</span>
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
          </div>

          <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white mb-10">
            Explore More Products in this Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-n9">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={420}
                    height={384}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center overflow-hidden">
                  <h3 className="text-h5 tracking-h5 font-bold text-white">{p.name}</h3>
                  <span className="mt-3 inline-flex items-center justify-center gap-1 text-btn2 font-semibold tracking-btn2 text-n2 group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300 ease-out">
                    REQUEST SAMPLE
                    <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
