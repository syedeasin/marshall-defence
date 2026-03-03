"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Firearms", img: "/images/firearms.webp", href: "/products?category=Sporting and Hunting" },
  { title: "Defense Apparel", img: "/images/defense-apparel-new.jpg", href: "/products?category=Ballistic Apparel" },
  { title: "Ammunition", img: "/images/ammunition.webp", href: "/products?category=Ammunition" },
  { title: "Tactical Supplies", img: "/images/tactical-supplies.webp", href: "/products?category=Accessories" },
];

export default function CategoriesSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayIdx = hoveredIdx !== null ? hoveredIdx : (activeIdx ?? 0);

  return (
    <section className="border-t border-white/5">
      {/* Header */}
      <div className="pt-[80px] mb-12 px-4 md:px-8 max-w-7xl mx-auto text-center w-full">
        <div className="inline-flex items-center gap-1 uppercase">
          <span className="text-n2 text-p3 tracking-p font-normal">[</span>
          <span className="text-n2 text-p4 tracking-p font-normal">
            Categories
          </span>
          <span className="text-n2 text-p3 tracking-p font-normal">]</span>
        </div>
        <h3 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white">
          Our Defense
          <br />
          Product Categories
        </h3>
      </div>

      {/* Scroll-hold wrapper — extra 50vh makes the viewer sticky briefly */}
      <div style={{ height: "150vh" }}>
        <div className="sticky top-0 h-[92vh] md:h-screen overflow-hidden">

          {/* Background images — layered, active fades + scales in */}
          {categories.map((cat, i) => (
            <Image
              key={cat.title}
              src={cat.img}
              alt={cat.title}
              fill
              className={`object-cover transition-all duration-700 ease-in-out ${
                i === displayIdx
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              sizes="100vw"
              priority={i === 0}
              quality={85}
            />
          ))}

          {/* Desktop gradient overlay — dark top & bottom, clear middle */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.9) 100%)" }}
          />

          {/* ── Desktop: 4 columns ── */}
          <div className="absolute inset-0 hidden md:grid grid-cols-4">
            {categories.map((cat, i) => {
              const isActive = i === activeIdx;
              const isHovered = i === hoveredIdx;
              const showButton = isHovered;

              return (
                <div
                  key={cat.title}
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative flex flex-col items-center p-12 cursor-pointer transition-all duration-300 ${
                    i < 3 ? "border-r border-white/10" : ""
                  }`}
                >
                  {/* Active/hovered column overlay */}
                  <div
                    className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive || isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Title — top, centered */}
                  <h4
                    className="relative text-h4 tracking-h4 font-bold text-center text-white"
                  >
                    {cat.title}
                  </h4>

                  {/* Spacer */}
                  <div className="relative flex-1" />

                  {/* Button — bottom, centered, hover-only */}
                  <div
                    className={`relative transition-all duration-300 ${
                      showButton
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <Link
                      href={cat.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-btn2 tracking-btn2 font-semibold uppercase text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Mobile: 4 rows ── */}
          <div className="absolute inset-0 flex flex-col md:hidden">
            {categories.map((cat, i) => {
              const isActive = i === activeIdx;

              return (
                <div
                  key={cat.title}
                  onClick={() => setActiveIdx(i)}
                  className={`relative flex-1 flex flex-col justify-end px-5 pb-5 cursor-pointer ${
                    i < 3 ? "border-b border-white/10" : ""
                  }`}
                >
                  {/* Inactive overlay — black 10% + blur */}
                  <div
                    className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative flex flex-col gap-2">
                    <h4
                      className="text-h6 tracking-h4 font-bold text-left text-white"
                    >
                      {cat.title}
                    </h4>
                    <div
                      className={`transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <Link
                        href="/products"
                        onClick={(e) => e.stopPropagation()}
                        className="text-btn2 tracking-btn2 font-semibold uppercase text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
