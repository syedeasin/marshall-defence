import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

const CategoriesSection = dynamic(() => import("@/components/sections/CategoriesSection"));
const CapabilitiesSection = dynamic(() => import("@/components/sections/CapabilitiesSection"));
const IndustriesWeServeSection = dynamic(() => import("@/components/sections/IndustriesWeServeSection"));

const aboutText =
  "Marshall Defense is a trusted supplier of military and sporting goods equipment designed to meet mission-critical requirements. We are committed to understanding your needs, delivering superior products, and providing the highest standard of service to every client we serve.";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24">
        <Image
          src="/images/hero-bg.webp"
          alt="Global defense supply."
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-5xl mx-auto px-4 pb-10 sm:pb-14 md:pb-20 text-center">
            <h1 className="text-[40px] tracking-h3 font-bold text-white md:text-h1 md:tracking-h1 mb-12 md:mb-24">
              GLOBAL
              <br />
              DEFENSE SUPPLY
            </h1>
            <p className="text-p5 md:text-p4 tracking-p text-n2 mx-auto mb-6 md:mb-8 max-w-[42ch] md:max-w-2xl">
              Marshall Defense supplies firearms, ammunition, apparel, and tactical solutions with full
              compliance, global logistics, and proven reliability.
            </p>
            <Link
              href="/products"
              className="inline-block text-btn2 md:text-btn1 tracking-btn2 md:tracking-btn1 font-semibold uppercase text-primary underline underline-offset-4"
            >
              Product Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="min-h-screen py-[120px] px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">

          {/* Row 1: 40/60 split */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 mb-20">

            {/* Left col (40%) — label + seal */}
            <div className="flex flex-col items-start justify-between h-full">
              <div className="inline-flex items-center gap-1">
                <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">About Us</span>
                <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
              </div>
              <div className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] relative flex-shrink-0 items-end">
                <Image
                  src="/images/clean-seal.png"
                  alt="Marshall Defense seal"
                  fill
                  sizes="(max-width: 1024px) 160px, 200px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right col (60%) — text + link */}
            <div className="flex flex-col justify-center">
              <p className="text-p2 md:text-p1 tracking-p font-medium text-white mb-10">
                {aboutText}
              </p>
              <Link
                href="/about"
                className="text-btn2 tracking-btn2 inline-flex items-center text-primary font-semibold uppercase border-b border-primary pb-0.5 self-start hover:opacity-70 transition-opacity duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Row 2: Two image panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-n9">
              <Image
                src="/images/premium-image-04.jpg"
                alt="Operations Overview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-n9">
              <Image
                src="/images/premium-image-03.jpg"
                alt="Product Testing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      <CategoriesSection />
      <CapabilitiesSection />
      <IndustriesWeServeSection />

      {/* Global Reach / Map */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-1 uppercase">
            <span className="text-n2 text-p3 tracking-p font-normal">[</span>
            <span className="text-n2 text-p4 tracking-p font-normal">Global Reach</span>
            <span className="text-n2 text-p3 tracking-p font-normal">]</span>
          </div>
          <h2 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white">
            Trusted Global Defense <br className="hidden md:block" />
            Supply Network
          </h2>
          <div className="mt-12">
            <Image
              src="/images/map-image.webp"
              alt="Global defense supply network map"
              width={1920}
              height={1080}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
