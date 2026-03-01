"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

/* ── Industries we serve ── */
const industries = [
  {
    badge: "SHOOTING RANGES",
    title: "Shooting Academies",
    text: "Supplying a vast array of shooting academies across the United States for police tactical training",
    icon: "/images/icons/shooting-academies.svg",
  },
  {
    badge: "MILITARY",
    title: "Infantry Defense",
    text: "For military, police, & defense, Marshall provides frontline products to all military branches",
    icon: "/images/icons/military.svg",
  },
  {
    badge: "LAW ENFORCEMENT",
    title: "Local & State Police",
    text: "Be equipped with the latest body armor and defense products for any situation on the front line",
    icon: "/images/icons/law.svg",
  },
  {
    badge: "COLLECTORS",
    title: "Gun Shows",
    text: "For the collectors, we supply both target range and demonstration firearms for exhibitions",
    icon: "/images/icons/collectors.svg",
  },
  {
    badge: "RETAILERS",
    title: "Sporting Goods",
    text: "Hunting, sporting, or home defense, rely on Marshall to keep you equipped for any situation",
    icon: "/images/icons/retailers.svg",
  },
  {
    badge: "AMMUNITIONS",
    title: "Mixed Munitions",
    text: "Whatever your need, Marshall has you covered with the best Defense options in every category",
    icon: "/images/icons/ammunitions.svg",
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

          <h2 className="text-h4 md:text-h3 tracking-h2 md:tracking-h3 font-bold text-white mb-10 md:mb-14">
            About Marshall Defense Company
          </h2>

          {/* Two hero images — image 1 wider than image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] rounded-xl overflow-hidden bg-n9">
              <Image
                  src="/images/about1.jpg"
                  alt="Marshall Defense operations"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-n9">
              <Image
                  src="/images/about2.jpg"
                  alt="Marshall Defense team"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
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
        <section className="py-0 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
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
                  src="/images/ammunation.jpg"
                  alt="Operational focus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background image + gradient (same as homepage) */}
          <Image
              src="/images/industries-we-serve-section-background.webp"
              alt="Industries we serve background"
              fill
              sizes="100vw"
              className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0)_32%,rgba(0,0,0,0)_72%,#000_100%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
            {/* Section label + headline */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-1 uppercase">
                <span className="text-n2 text-p3 tracking-p font-normal">[</span>
                <span className="text-n2 text-p4 tracking-p font-normal">INDUSTRIES WE SERVE</span>
                <span className="text-n2 text-p3 tracking-p font-normal">]</span>
              </div>
              <h2 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white px-0 md:px-[200px]">
                Providing A vast Array of Defense
                Firearms and Ammunitions
              </h2>
            </div>

            {/* Static 3×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                  <div
                      key={ind.title}
                      className="rounded-2xl border border-w5 bg-w3 backdrop-blur-[20px] p-10"
                  >
                    <div className="inline-flex items-center rounded-lg bg-w5 px-3 py-[6px]">
                      <span className="text-p5 tracking-p font-normal text-n2 uppercase">{ind.badge}</span>
                    </div>
                    <h5 className="mt-6 text-h5 tracking-h5 font-bold text-white">{ind.title}</h5>
                    <p className="mt-2 text-p4 tracking-p font-normal text-n2 max-w-[28ch]">{ind.text}</p>
                    <div className="mt-[80px] flex justify-end">
                      <Image
                          src={ind.icon}
                          alt={`${ind.title} icon`}
                          width={60}
                          height={60}
                          sizes="60px"
                          className="w-[60px] h-[60px]"
                      />
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          CTA SECTION (reused component)
          ════════════════════════════════════════════ */}
        <CTASection />
      </>
  );
}
