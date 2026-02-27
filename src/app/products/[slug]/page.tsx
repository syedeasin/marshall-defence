// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

// ✅ Next.js 15+/16: params is a Promise and must be awaited
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
  ).slice(0, 2);

  return (
      <>
        {/* ════════════════════════════════════════════
          BREADCRUMB
          ════════════════════════════════════════════ */}
        <div className="pt-28 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-p5 tracking-p font-normal text-n4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-n6" />
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="text-n6" />
            <Link href="/products" className="hover:text-white transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={14} className="text-n6" />
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>

        {/* ════════════════════════════════════════════
          PRODUCT DETAIL – 2 COLUMNS
          ════════════════════════════════════════════ */}
        <section className="py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* ── LEFT: Images ── */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-n9 border border-white/5">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="relative aspect-square rounded-lg overflow-hidden bg-n9 border border-white/5 cursor-pointer hover:border-primary/30 transition-colors"
                    >
                      <Image
                          src={product.image}
                          alt={`${product.name} view ${i}`}
                          fill
                          className="object-cover opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div className="flex flex-col">
              {/* Title */}
              <h1 className="text-h4 md:text-h3 tracking-h3 font-bold text-white mb-2">
                {product.name}
              </h1>

              {/* Subtitle / SKU line */}
              <p className="text-p5 tracking-p font-normal text-n4 mb-4">
                {product.id.padStart(5, "0")} / {product.name}:
              </p>

              {/* Description */}
              <p className="text-p4 tracking-p font-normal text-n3 mb-8">
                {product.description}
              </p>

              {/* Specs table */}
              <div className="mb-8">
                <table className="w-full">
                  <tbody>
                  {product.specs.map((spec, i) => (
                      <tr
                          key={i}
                          className="border-b border-white/5 last:border-none"
                      >
                        <td className="py-3 pr-4 text-p5 tracking-p font-normal text-n4 w-2/5">
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

              {/* CTA Button */}
              <div>
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

        {/* ════════════════════════════════════════════
          DOWNLOAD PRODUCT DETAILS
          ════════════════════════════════════════════ */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-h5 md:text-h4 tracking-h4 font-bold text-white text-center mb-8">
            Download Product Details
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-xl px-6 py-5 flex items-center justify-between">
            <span className="text-p4 tracking-p font-medium text-white">
              Product Brochure
            </span>
              <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Download size={18} className="text-white" />
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          RELATED PRODUCTS
          ════════════════════════════════════════════ */}
        {related.length > 0 && (
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
              {/* Bracket label */}
              <div className="inline-flex items-center gap-1 mb-3">
                <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
              Related Products
            </span>
                <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
              </div>

              <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white mb-10">
                Explore More Products in this Category
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                    <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="group block"
                    >
                      <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10">
                        <div className="relative aspect-[4/3] bg-n9 overflow-hidden">
                          <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-h6 tracking-h6 font-bold text-white mb-1 group-hover:text-primary transition-colors">
                            {p.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-p5 tracking-p font-normal text-primary">
                      Request Sample <ArrowUpRight size={14} />
                    </span>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </section>
        )}
      </>
  );
}