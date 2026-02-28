import Image from "next/image";
import Link from "next/link";

interface CTASectionProps {
  topLabel?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
                                     topLabel,
                                     title = "Discuss Your\nOperational Requirements",
                                     description = "From compliant sourcing to export support and global delivery, our team provides reliable solutions with clear communication and on-time execution.",
                                     primaryLabel = "Product Catalog",
                                     primaryHref = "/products",
                                     secondaryLabel = "Contact Operations",
                                     secondaryHref = "/contact",
                                   }: CTASectionProps) {
  return (
      <section className="relative overflow-hidden min-h-[100vh] md:min-h-[100vh]">
          {/* Background image */}
          <Image
              src="/images/cta-background.webp"
              alt="CTA background"
              fill
              priority
              className="object-cover object-top"
          />


          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-[32%] to-black"/>

          {/* Content (bottom-aligned) */}
          <div className="relative z-10 min-h-[100vh] flex items-end">
              <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pb-[120px]">
                  <div className="w-full text-center">
                      {/* Top label */}
                      {topLabel && (
                        <div className="inline-flex items-center gap-1 uppercase mb-2">
                          <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                          <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">{topLabel}</span>
                          <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-h4 md:text-h3 tracking-h3 font-bold text-white whitespace-pre-line">
                          {title}
                      </h3>

                      {/* Gap: 16px */}
                      <p className="mt-4 text-p4 md:text-p3 tracking-p font-normal text-n2 max-w-2xl mx-auto">
                          {description}
                      </p>

                      {/* Gap: 40px, buttons gap: 16px */}
                      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                          {/* Button 1 (Primary) */}
                          <Link
                              href={primaryHref}
                              className="inline-flex items-center justify-center rounded-full bg-primary text-white uppercase font-semibold
                           text-btn2 md:text-btn1 tracking-btn2 md:tracking-btn1 py-[18px] px-7 hover:opacity-90 transition-opacity w-full sm:w-auto"
                          >
                              {primaryLabel}
                          </Link>

                          {/* Button 2 (White) */}
                          <Link
                              href={secondaryHref}
                              className="inline-flex items-center justify-center rounded-full bg-white text-black uppercase font-semibold
                           text-btn2 md:text-btn1 tracking-btn2 md:tracking-btn1 py-[18px] px-7 hover:bg-n1 transition-colors w-full sm:w-auto"
                          >
                              {secondaryLabel}
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}