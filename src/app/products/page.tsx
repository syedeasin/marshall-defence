"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All Products");
  const filtered = activeTab === "All Products" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">Catalog</span>
        <h1 className="text-[64px] leading-[72px] font-bold tracking-[-0.03em] text-white mb-4">Our Products</h1>
        <p className="text-n3 text-[18px] leading-7 max-w-2xl mx-auto">
          Browse our comprehensive catalog of defense equipment, sourced from the world&apos;s most trusted manufacturers.
        </p>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-black/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex-none px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === cat ? "bg-primary text-white" : "text-n4 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="glass-card rounded-xl overflow-hidden group">
              <div className="bg-n9 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <span className="text-n5 text-sm">{p.name}</span>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">{p.category}</span>
                <h3 className="text-white font-bold text-[18px] mt-1 mb-4">{p.name}</h3>
                <Button variant="glass" size="sm" href={`/products/${p.slug}`} icon={<ArrowUpRight size={14} />}>
                  Request Sample
                </Button>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-n4">No products found in this category.</div>
        )}
      </section>

      <CTASection />
    </>
  );
}
