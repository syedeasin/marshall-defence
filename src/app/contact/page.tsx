// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronUp } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */
const faqs = [
  {
    q: "Who does Marshall Defense work with?",
    a: "We work with defense organizations, law enforcement agencies, commercial partners, and authorized buyers seeking reliable and compliant defense products.",
  },
  {
    q: "What types of products does Marshall Defense supply?",
    a: "We supply firearms, ammunition, ballistic apparel, tactical equipment, night vision optics, military energetics, and a wide range of defense accessories from trusted manufacturers worldwide.",
  },
  {
    q: "How do I request a product sample or quote?",
    a: "You can use the Request Sample button on any product page, or fill out the contact form on this page. Our team typically responds within 24 business hours.",
  },
  {
    q: "Is Marshall Defense ITAR compliant?",
    a: "Yes. Marshall Defense is fully ITAR-registered and maintains all necessary export licenses and compliance documentation for international defense trade.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
      <>
        {/* ═══ HEADER SECTION ═══ */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
          {/* Bracket label */}
          <div className="inline-flex items-center gap-1 uppercase mb-2">
            <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">[</span>
            <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
            Contact Us
          </span>
            <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">]</span>
          </div>

          <h1 className="text-h3 md:text-h2 tracking-h3 md:tracking-h2 font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-p4 md:text-p3 tracking-p font-normal text-n3 max-w-lg mx-auto">
            We&apos;re here to help with anything you need. Reach out and
            we&apos;ll get back to you as soon as possible.
          </p>
        </section>

        {/* ═══ 3 INFO CARDS ═══ */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Address */}
            <div className="rounded-xl border border-n8 bg-n9/50 p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-n8 flex items-center justify-center mx-auto mb-4">
                <MapPin size={20} className="text-n3" />
              </div>
              <h3 className="text-p4 tracking-p font-semibold text-white mb-2">Address</h3>
              <p className="text-p5 tracking-p font-normal text-n4 leading-relaxed">
                Broken Arrow, Oklahoma,
                <br />
                74014, USA
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-n8 bg-n9/50 p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-n8 flex items-center justify-center mx-auto mb-4">
                <Phone size={20} className="text-n3" />
              </div>
              <h3 className="text-p4 tracking-p font-semibold text-white mb-2">Phone number</h3>
              <p className="text-p5 tracking-p font-normal text-n4 leading-relaxed">
                <a href="tel:+19783822379" className="hover:text-white transition-colors">
                  +1 (978) 382-2379
                </a>
                <br />
                <a href="tel:+19788522850" className="hover:text-white transition-colors">
                  +1 (978) 852-2850
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-n8 bg-n9/50 p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-n8 flex items-center justify-center mx-auto mb-4">
                <Mail size={20} className="text-n3" />
              </div>
              <h3 className="text-p4 tracking-p font-semibold text-white mb-2">Email address</h3>
              <p className="text-p5 tracking-p font-normal text-n4 leading-relaxed">
                <a href="mailto:info@marshall-defense.com" className="hover:text-white transition-colors">
                  info@marshall-defense.com
                </a>
                <br />
                <a href="mailto:info@marshall-defence.com" className="hover:text-white transition-colors">
                  info@marshall-defence.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ═══ FORM + IMAGE ═══ */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto pb-16 md:pb-24">
          <div className="rounded-2xl border border-n8 overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
            {/* LEFT: Form */}
            <div className="p-6 md:p-10">
              <h2 className="text-h5 tracking-h5 font-bold text-white mb-6">
                Drop us a message
              </h2>

              <form className="space-y-5">
                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-p5 tracking-p font-semibold text-white mb-2">
                      First name<span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Robert"
                        className="w-full bg-n9 border border-n8 rounded-lg px-4 py-3 text-p5 tracking-p text-white placeholder:text-n5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-p5 tracking-p font-semibold text-white mb-2">
                      Last name<span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Smith"
                        className="w-full bg-n9 border border-n8 rounded-lg px-4 py-3 text-p5 tracking-p text-white placeholder:text-n5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-p5 tracking-p font-semibold text-white mb-2">
                      Email<span className="text-primary">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="hellow@gmail.com"
                        className="w-full bg-n9 border border-n8 rounded-lg px-4 py-3 text-p5 tracking-p text-white placeholder:text-n5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-p5 tracking-p font-semibold text-white mb-2">
                      Company<span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Law Enforcement"
                        className="w-full bg-n9 border border-n8 rounded-lg px-4 py-3 text-p5 tracking-p text-white placeholder:text-n5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-p5 tracking-p font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                      rows={4}
                      placeholder="This space is yours share your massage..."
                      className="w-full bg-n9 border border-n8 rounded-lg px-4 py-3 text-p5 tracking-p text-white placeholder:text-n5 focus:border-primary focus:outline-none resize-none transition-colors"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start gap-3">
                  <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 rounded border-n8 bg-n9 text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <label htmlFor="terms" className="text-p5 tracking-p font-normal text-n4">
                    By submitting, I agree to the{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-white transition-colors">
                      Terms &amp; Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-primary text-white uppercase font-semibold text-btn2 tracking-btn2 py-[14px] px-7 hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT: Image */}
            <div className="relative hidden md:block min-h-[500px]">
              <Image
                  src="/images/contact-us-image.jpg"
                  alt="Marshall Defense operations"
                  fill
                  sizes="(max-width: 768px) 0vw, 50vw"
                  className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ═══ FAQ SECTION ═══ */}
        <section className="px-4 md:px-8 max-w-3xl mx-auto pb-16 md:pb-24">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1 uppercase mb-2">
              <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">[</span>
              <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">FAQ</span>
              <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">]</span>
            </div>
            <h2 className="text-h4 md:text-h3 tracking-h3 font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                  <div
                      key={i}
                      className="rounded-xl border border-n8 bg-n9/50 overflow-hidden"
                  >
                    <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                  <span className="text-p4 tracking-p font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                      <ChevronUp
                          size={18}
                          className={`text-n4 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-0" : "rotate-180"
                          }`}
                      />
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-6 pb-5 text-p5 tracking-p font-normal text-n3 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>

          {/* Bottom text */}
          <p className="text-center mt-8 text-p5 tracking-p font-normal text-n4">
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <Link
                href="/contact"
                className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Contact us
            </Link>{" "}
            with our friendly team.
          </p>
        </section>
      </>
  );
}