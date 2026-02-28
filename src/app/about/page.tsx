import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Marshall Defense — a trusted B2B military and sporting goods supplier serving defense, law enforcement, and commercial partners worldwide.",
};

/* ── Industries we serve ── */
const industries = [
  {
    tag: "Shooting Ranges",
    title: "Shooting Academies",
    desc: "Providing a vast array of shooting academies across the United States for precise tactical training.",
    icon: "🎯",
  },
  {
    tag: "Military",
    title: "Infantry Defense",
    desc: "For military, police, & defense, Marshall provides trusted products to all military branches.",
    icon: "🛡️",
  },
  {
    tag: "Law Enforcement",
    title: "Local & State Police",
    desc: "We cooperate with the latest body armor and defense products for any situation on the front line.",
    icon: "⚔️",
  },
  {
    tag: "Exhibitions",
    title: "Gun Shows",
    desc: "For the collectors, we supply both legacy and demonstration firearms for exhibitions.",
    icon: "🏛️",
  },
  {
    tag: "Dealers",
    title: "Sporting Goods",
    desc: "Hunting, sporting, or home-defense, rely on Marshall to keep you equipped for any situation.",
    icon: "🏹",
  },
  {
    tag: "Ammunition",
    title: "Mixed Munitions",
    desc: "Whatever your need, Marshall has you covered with the best defense options in every category.",
    icon: "💥",
  },
];

/* ── Stats row ── */
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "53+", label: "Trusted Supply Partners" },
  { value: "3,701+", label: "Products Delivered Globally" },
  { value: "98%", label: "Regulatory Compliance" },
];

export default function AboutPage() {
  return (
      <>
        {/* ════════════════════════════════════════════
          HERO – About Marshall Defense Company
          ════════════════════════════════════════════ */}
        <section className="pt-32 md:pt-40 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Bracket label */}
          <div className="inline-flex items-center gap-1 mb-3">
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
            <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
            About Us
          </span>
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
          </div>

          <h1 className="text-h3 md:text-h1 tracking-h3 md:tracking-h1 font-bold text-white mb-10 md:mb-14">
            About Marshall
            <br />
            Defense Company
          </h1>

          {/* Two hero images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-n9">
              <Image
                  src="https://placehold.co/800x600/1a1a1a/333?text=Tactical+Operator"
                  alt="Tactical operator"
                  fill
                  className="object-cover"
                  priority
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-n9">
              <Image
                  src="https://placehold.co/800x600/1a1a1a/333?text=Warehouse+Storage"
                  alt="Defense warehouse"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          OUR STORY
          ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
          {/* Bracket label */}
          <div className="inline-flex items-center gap-1 mb-4">
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
            <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
            Our Story
          </span>
            <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
          </div>

          <p className="text-p3 md:text-p2 tracking-p font-normal text-n2 mb-6">
            Marshall Defense is a military and sporting goods supplier delivering reliable, compliant
            solutions. As part of Marshall Enterprises, we serve defense, law enforcement, and{" "}
            <span className="text-white font-semibold">commercial</span> partners with trusted products.
          </p>
          <p className="text-p4 tracking-p font-normal text-n3">
            Our range includes ammunition, firearms, defense apparel, and essential supplies, supported by
            responsible sourcing and dependable delivery.
          </p>
        </section>

        {/* ════════════════════════════════════════════
          STATS ROW
          ════════════════════════════════════════════ */}
        <section className="pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center">
            {stats.map((s, i) => (
                <div
                    key={s.label}
                    className={`${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}
                >
                  <div className="text-h3 md:text-h2 tracking-h2 font-bold text-white">{s.value}</div>
                  <p className="text-p5 tracking-p font-normal text-n4 mt-1">{s.label}</p>
                </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
          OPERATIONAL FOCUS – Mission & Vision
          ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
          {/* Section label + headline */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1 mb-3">
              <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
              <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
              Operational Focus
            </span>
              <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
            </div>
            <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white">
              Fits defense, law enforcement,
              <br className="hidden md:block" />
              and enterprise audiences
            </h2>
          </div>

          {/* 2-col: image left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-n9">
              <Image
                  src="https://placehold.co/800x600/1a1a1a/333?text=Operator+Aiming"
                  alt="Operational focus"
                  fill
                  className="object-cover"
              />
            </div>

            {/* Mission + Vision text */}
            <div>
              <h3 className="text-h5 tracking-h5 font-bold text-white mb-3">Our Mission</h3>
              <p className="text-p4 tracking-p font-normal text-n3 mb-8">
                We deliver defense and sporting goods solutions that meet real operational needs with accuracy,
                transparency, and reliability, supported by consistent quality and responsible execution across
                all operations.
              </p>

              <h3 className="text-h5 tracking-h5 font-bold text-white mb-3">Our Vision</h3>
              <p className="text-p4 tracking-p font-normal text-n3 mb-8">
                We build long-term trust through strict quality standards, responsible sourcing, and fully
                compliant operations that support reliable partnerships worldwide within respected defense
                environments.
              </p>

              <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white uppercase font-semibold text-btn2 tracking-btn2 py-[18px] px-7 hover:opacity-90 transition-opacity"
              >
                Product Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          INDUSTRIES WE SERVE
          ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
          {/* Section label + headline */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1 mb-3">
              <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
              <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
              Industries We Serve
            </span>
              <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
            </div>
            <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white">
              Providing A vast Array of Defense
              <br className="hidden md:block" />
              Firearms and Ammunitions
            </h2>
          </div>

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
            {industries.map((ind) => (
                <div
                    key={ind.title}
                    className="bg-black p-6 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Tag */}
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-n5">
                {ind.tag}
              </span>
                  {/* Title */}
                  <h4 className="text-h6 tracking-h6 font-bold text-white">{ind.title}</h4>
                  {/* Description */}
                  <p className="text-p5 tracking-p font-normal text-n4 flex-1">{ind.desc}</p>
                  {/* Icon placeholder */}
                  <span className="text-2xl opacity-60">{ind.icon}</span>
                </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
          CTA SECTION (reused component)
          ════════════════════════════════════════════ */}
        <CTASection />
      </>
  );
}