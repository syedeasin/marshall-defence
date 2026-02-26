"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Shield, Globe, Award, Users, Truck, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { PRODUCTS } from "@/lib/data";
import IndustriesWeServeSection from "@/components/sections/IndustriesWeServeSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";



const sliderItems = [
  { title: "Precision Firearms", category: "Firearms", img: "https://placehold.co/400x500/0a0a0a/1a1a1a?text=Firearms" },
  { title: "Advanced Optics", category: "Optics", img: "https://placehold.co/400x500/0a0a0a/1a1a1a?text=Optics" },
  { title: "Tactical Supplies", category: "Supplies", img: "https://placehold.co/400x500/0a0a0a/1a1a1a?text=Tactical" },
  { title: "Communications", category: "Comms", img: "https://placehold.co/400x500/0a0a0a/1a1a1a?text=Communications" },
];

const features = [
  { icon: <Shield size={28} />, title: "Certified Quality", desc: "All products meet or exceed NATO and MIL-SPEC standards for reliability in the field." },
  { icon: <Globe size={28} />, title: "Global Distribution", desc: "We deliver to over 50 countries with secure logistics partnerships." },
  { icon: <Award size={28} />, title: "Industry Certified", desc: "GSA schedule contractor and ITAR compliant with full export licensing." },
  { icon: <Users size={28} />, title: "B2B Specialists", desc: "Dedicated account managers for government, military, and enterprise clients." },
  { icon: <Truck size={28} />, title: "Rapid Fulfillment", desc: "Expedited fulfillment with real-time order tracking and dedicated support." },
  { icon: <Lock size={28} />, title: "Secure Transactions", desc: "End-to-end encrypted ordering with full NDAs and compliance documentation." },
];

const featured8 = PRODUCTS.slice(0, 8);

export default function HomePage() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleCount = 4;
  const maxIdx = featured8.length - visibleCount;

  return (
      <>
        {/* Hero */}
        <section className="relative min-h-[100svh] overflow-hidden pt-24">
          {/* Background Image */}
          <Image
              src="/images/hero-bg.webp"
              alt="Global defense supply."
              fill
              priority
              className="object-cover object-top"
          />

          {/* Optional: dark overlay for readability (recommended) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Content aligned to bottom */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="max-w-5xl mx-auto px-4 pb-10 sm:pb-14 md:pb-20 text-center">
              {/* Title: mobile uses h3, then scales up to h1 */}
              <h1 className="text-h3 tracking-h3 font-bold text-white md:text-h1 md:tracking-h1 mb-6 md:mb-24">
                GLOBAL
                <br />
                DEFENSE SUPPLY
              </h1>

              {/* Description: p4 on mobile, p2 on md+ (color n2 as you asked) */}
              <p className="text-p4 tracking-p text-n2 mx-auto mb-6 md:mb-8 max-w-[42ch] md:max-w-2xl">
                Marshall Defense supplies firearms, ammunition, apparel, and tactical solutions with full
                compliance, global logistics, and proven reliability.
              </p>

              {/* Button style: btn1 + primary + underline */}
              <Link
                  href="/products"
                  className="inline-block text-btn1 tracking-btn1 font-semibold uppercase text-primary underline underline-offset-4"
              >
                Product Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">

            {/* Row 1: label top-left, logo left col, text right col */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-10">

              {/* Left col — label + seal logo */}
              <div className="flex flex-col">
                {/* [ ABOUT US ] bracket label */}
                <div className="inline-flex items-center gap-1 mb-10 self-start">
                  <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                  <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">About Us</span>
                  <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
                </div>

                {/* Seal / Logo badge */}
                <Image
                    src="/images/seal.webp"
                    alt="Marshall Defense seal"
                    width={140}
                    height={140}
                />
              </div>

              {/* Right col — headline + body + link */}
              <div className="flex flex-col justify-center">
                <p className="text-white text-[22px] leading-[34px] font-medium tracking-tight mb-5">
                  Marshall Defense is a military and sporting good equipment supplier that delivers solutions that meet  requirements. Meeting your needs and  providing top quality service is our mission in delivering to our clients.
                </p>

                <Link
                    href="/about"
                    className="text-btn2 tracking-btn2 inline-flex items-center gap-2 text-primary font-semibold tracking-[0.12em] uppercase border-b border-primary/40 pb-0.5 self-start hover:border-primary transition-colors duration-200 group"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Row 2: Two video panels side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Video 1 — playing (pause icon) */}
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-n9">
                {/* Simulated video still — soldiers in combat */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#3a3020] via-[#2a2510] to-[#1a1a0a]"
                    style={{
                      backgroundImage: `radial-gradient(ellipse at 30% 60%, rgba(120,90,40,0.4) 0%, transparent 60%),
                                    radial-gradient(ellipse at 70% 30%, rgba(80,60,20,0.3) 0%, transparent 50%)`,
                    }}
                />
                {/* Dust/smoke overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"/>
                {/* Silhouette soldiers hint */}
                <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center gap-3 px-8">
                  {[...Array(4)].map((_, i) => (
                      <div
                          key={i}
                          className="bg-black/60 rounded-sm"
                          style={{
                            width: `${10 + i * 2}px`,
                            height: `${40 + Math.sin(i) * 10}px`,
                            transform: `rotate(${(i - 1.5) * 4}deg)`,
                          }}
                      />
                  ))}
                </div>
                {/* Pause button (video is "playing") */}
                <div className="absolute top-4 right-4">
                  <div
                      className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16" rx="1"/>
                      <rect x="14" y="4" width="4" height="16" rx="1"/>
                    </svg>
                  </div>
                </div>
                {/* Hover overlay with play */}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-[13px] font-medium tracking-tight">Operations Overview</span>
                </div>
              </div>

              {/* Video 2 — paused (play icon) */}
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-n9">
                {/* Simulated video still — rifle on tripod in mountains */}
                <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, #1a2535 0%, #0d1520 40%, #0a0f18 100%)`,
                      backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(30,60,100,0.5) 0%, transparent 60%),
                                    radial-gradient(ellipse at 20% 80%, rgba(10,20,40,0.8) 0%, transparent 40%)`,
                    }}
                />
                {/* Mountain silhouette */}
                <svg className="absolute bottom-0 left-0 right-0 w-full" height="60%" viewBox="0 0 400 200"
                     preserveAspectRatio="none" fill="none">
                  <path d="M0 200 L60 80 L120 130 L180 40 L240 100 L300 60 L360 90 L400 50 L400 200Z" fill="#0a0d12"/>
                  <path d="M0 200 L80 120 L140 160 L200 90 L260 130 L320 100 L380 120 L400 110 L400 200Z"
                        fill="#060809"/>
                </svg>
                {/* Rifle silhouette hint */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full"
                     style={{transform: 'translateX(-50%) rotate(-3deg)'}}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>

                {/* Play button (video is "paused") */}
                <div className="absolute top-4 right-4">
                  <div
                      className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
                {/* Hover overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-[13px] font-medium tracking-tight">Product Testing</span>
                </div>
              </div>
            </div>

          </div>
        </section>



        {/* CategoriesSection */}
        <CategoriesSection />

        {/* Capabilities */}
        <CapabilitiesSection />

        {/* Industries We Serve Section */}
        <IndustriesWeServeSection />

        {/* Map Section */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Top title: [Global Reach] */}
            <div className="inline-flex items-center gap-1 uppercase">
              <span className="text-n2 text-p3 tracking-p font-normal">[</span>
              <span className="text-n2 text-p4 tracking-p font-normal">Global Reach</span>
              <span className="text-n2 text-p3 tracking-p font-normal">]</span>
            </div>

            {/* gap: 8px */}
            <h3 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white">
              Trusted Global Defense <br className="hidden md:block" />Supply Network
            </h3>

            {/* gap: 48px */}
            <div className="mt-12">
              {/* Full width, auto height, high-res */}
              <Image
                  src="/images/map-image.webp"
                  alt="Global reach map"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>

        <CTASection/>
      </>
  );
}
