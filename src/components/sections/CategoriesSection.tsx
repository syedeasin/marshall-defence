"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Firearms", img: "/images/firearms.webp" },
  { title: "Defense Apparel", img: "/images/defense-apparel.webp" },
  { title: "Ammunition", img: "/images/ammunition.webp" },
  { title: "Tactical Supplies", img: "/images/tactical-supplies.webp" },
];

export default function CategoriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  return (
    <section className="py-[80px] border-t border-white/5">
      {/* Header */}
      <div className="mb-12 px-4 md:px-8 max-w-7xl mx-auto text-center w-full">
        <div className="inline-flex items-center gap-1 uppercase mb-2">
          <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
          <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
            Categories
          </span>
          <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
        </div>
        <h2 className="text-h3 md:text-h2 tracking-h3 md:tracking-h2 font-bold text-white">
          Our Defense
          <br />
          Product Categories
        </h2>
      </div>

      {/* Category Viewer — full width, no radius, fixed desktop height */}
      <div className="relative w-full h-[480px] md:h-[800px] overflow-hidden">
        {/* Background Images — all layered, active/hovered fades in */}
        {categories.map((cat, i) => (
          <Image
            key={cat.title}
            src={cat.img}
            alt={cat.title}
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              i === displayIdx ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            priority={i === 0}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

        {/* Column grid */}
        <div className="absolute inset-0 grid grid-cols-4">
          {categories.map((cat, i) => {
            const isActive = i === activeIdx;
            const isHovered = i === hoveredIdx;
            const showButton = isActive || isHovered;

            return (
              <div
                key={cat.title}
                onClick={() => setActiveIdx(i)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col p-6 md:p-12 cursor-pointer transition-all duration-300 ${
                  i < 3 ? "border-r border-white/10" : ""
                }`}
              >
                {/* Title — top */}
                <h4
                  className={`text-h6 md:text-h4 tracking-h4 font-bold transition-colors duration-300 ${
                    isActive || isHovered ? "text-white" : "text-n4"
                  }`}
                >
                  {cat.title}
                </h4>

                {/* Spacer */}
                <div className="flex-1" />

                {/* View All Products — bottom, visible on hover or active */}
                <div
                  className={`transition-all duration-300 ${
                    showButton
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    href="/products"
                    onClick={(e) => e.stopPropagation()}
                    className="text-btn1 tracking-btn1 font-semibold uppercase text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
