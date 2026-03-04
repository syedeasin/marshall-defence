// src/app/products/page.tsx
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("All Products");
    const gridRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const cat = searchParams.get("category");
        setActiveTab(cat && CATEGORIES.includes(cat) ? cat : "All Products");
    }, [searchParams]);

    const handleTabChange = (cat: string) => {
        setActiveTab(cat);
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const filtered =
        activeTab === "All Products"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === activeTab);

    return (
        <>
            {/* ════════════════════════════════════════════
          HERO BANNER
          ════════════════════════════════════════════ */}
            <section className="relative h-[60vh] md:h-[612px] flex items-end overflow-hidden border-b border-n8">
                <Image
                    src="/images/sub-page-header.webp"
                    alt="Products"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pb-12 md:pb-20">
                    <div className="inline-flex items-center gap-1 mb-2">
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                        <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
                            Products
                        </span>
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
                    </div>

                    <h1 className="text-h3 md:text-h2 tracking-h3 md:tracking-h2 font-bold text-white mb-4">
                        Our Products
                    </h1>
                    <p className="text-p4 md:text-p3 tracking-p font-normal text-n2 max-w-xl">
                        Innovation, excellence, and client retention are at the heart of the company&apos;s ethos.
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════════════════
          FILTER TABS
          ════════════════════════════════════════════ */}
            <div className="sticky top-0 z-40 bg-black border-b border-n8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex overflow-x-auto no-scrollbar pt-[2px]">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleTabChange(cat)}
                                className={`flex-none text-p5 sm:text-p3 tracking-p font-medium transition-colors whitespace-nowrap px-4 sm:px-[23px] ${
                                    activeTab === cat
                                        ? "bg-primary text-white border-t-2 border-b-2 border-primary py-2.5 sm:py-3"
                                        : "text-n3 hover:text-white py-2.5 sm:py-3"
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
            <section ref={gridRef} className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {filtered.map((p) => (
                        <Link
                            key={p.id}
                            href={`/products/${p.slug}`}
                            className="group block"
                        >
                            <div className="rounded-2xl overflow-hidden bg-n9">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    width={420}
                                    height={384}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="mt-6 text-center overflow-hidden">
                                <h3 className="text-h5 tracking-h5 font-bold text-white">{p.name}</h3>
                                <span className="mt-3 inline-flex items-center justify-center gap-1 text-btn2 font-semibold tracking-btn2 text-n2 group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300 ease-out">
                                    Request a Quote
                                    <ChevronRight size={14} />
                                </span>
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

export default function ProductsPage() {
    return (
        <Suspense fallback={null}>
            <ProductsContent />
        </Suspense>
    );
}
