// src/app/products/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState("All Products");
    const filtered =
        activeTab === "All Products"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === activeTab);

    return (
        <>
            {/* ════════════════════════════════════════════
          HERO BANNER
          ════════════════════════════════════════════ */}
            <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
                {/* Background image */}
                <Image
                    src="https://placehold.co/1920x900/0a0a0a/1a1a1a?text=Military+Energetics+Banner"
                    alt="Military Energetics"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pb-12 md:pb-16">
                    {/* Bracket label */}
                    <div className="inline-flex items-center gap-1 mb-3">
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                        <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
              Products
            </span>
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
                    </div>

                    <h1 className="text-h3 md:text-h1 tracking-h3 md:tracking-h1 font-bold text-white mb-4">
                        Military Energetics
                    </h1>
                    <p className="text-p4 md:text-p3 tracking-p font-normal text-n2 max-w-xl">
                        Innovation, excellence, and client retention are at the heart of the company&apos;s ethos.
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════════════════
          FILTER TABS
          ════════════════════════════════════════════ */}
            <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`flex-none px-5 py-2.5 rounded-full text-btn2 tracking-btn2 font-semibold transition-all whitespace-nowrap ${
                                    activeTab === cat
                                        ? "bg-primary text-white"
                                        : "bg-w3 border border-white/10 text-n3 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════════
          PRODUCTS GRID
          ════════════════════════════════════════════ */}
            <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p) => (
                        <Link
                            key={p.id}
                            href={`/products/${p.slug}`}
                            className="group block"
                        >
                            <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10">
                                {/* Image */}
                                <div className="relative aspect-[4/3] bg-n9 overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-h6 tracking-h6 font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                        {p.name}
                                    </h3>
                                    <span className="inline-flex items-center gap-1 text-p5 tracking-p font-normal text-primary hover:underline">
                    Request Sample <ArrowUpRight size={14} />
                  </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-n4 text-p4 tracking-p">
                        No products found in this category.
                    </div>
                )}
            </section>

            {/* ════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════ */}
            <CTASection />
        </>
    );
}