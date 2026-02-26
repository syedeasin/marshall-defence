import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Download, ChevronRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function SingleProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <div className="px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-n4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-white transition-colors">{product.category}</Link>
          <ChevronRight size={14} />
          <span className="text-white">{product.name}</span>
        </nav>
      </div>

      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="bg-n9 rounded-xl aspect-[4/3] flex items-center justify-center border border-white/5">
              <span className="text-n5 text-sm">{product.name}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-n9 rounded-lg aspect-square flex items-center justify-center border border-white/5 cursor-pointer hover:border-primary/30 transition-colors">
                  <span className="text-n6 text-xs">View {i}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-primary text-xs font-medium uppercase tracking-wider">{product.category}</span>
            <h1 className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-white mt-2 mb-4">{product.name}</h1>
            <p className="text-n3 text-[18px] leading-7 mb-6">{product.description}</p>
            <div className="glass-card rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-none">
                      <td className="px-4 py-3 text-n4 font-medium w-1/2">{spec.label}</td>
                      <td className="px-4 py-3 text-white">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="solid" size="lg" href="/contact" icon={<ArrowUpRight size={18} />}>Request a Quote</Button>
              <Button variant="glass" size="lg" href="#" icon={<Download size={18} />} iconPosition="left">Download PDF</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-[32px] leading-10 font-bold tracking-[-0.015em] text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
              <CheckCircle2 size={20} className="text-primary flex-none" />
              <span className="text-n2 text-[16px]">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-[32px] leading-10 font-bold tracking-[-0.015em] text-white mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <div key={p.id} className="glass-card rounded-xl overflow-hidden">
                <div className="bg-n9 aspect-[4/3] flex items-center justify-center">
                  <span className="text-n5 text-sm">{p.name}</span>
                </div>
                <div className="p-4">
                  <span className="text-primary text-xs font-medium">{p.category}</span>
                  <h3 className="text-white font-semibold text-sm mt-1 mb-3">{p.name}</h3>
                  <Link href={`/products/${p.slug}`} className="text-n3 text-xs hover:text-white underline underline-offset-2 flex items-center gap-1">
                    View Details <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
