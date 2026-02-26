"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Plus, Minus } from "lucide-react";
import Button from "@/components/ui/Button";

const faqs = [
  { q: "How do I place a bulk order?", a: "Contact our B2B team via the quote request form. Our account managers will respond within 24 hours with pricing, availability, and delivery options." },
  { q: "Are you ITAR/EAR compliant?", a: "Yes. Marshall-Defense is fully ITAR and EAR compliant. We maintain all necessary export licenses and can assist with end-use documentation." },
  { q: "What is your minimum order quantity?", a: "MOQs vary by product category. Many items have no MOQ, while specialized defense equipment may require minimum orders. Contact us for specifics." },
  { q: "Do you offer Net 30/60 terms for verified agencies?", a: "Yes. Government agencies, military units, and verified enterprise accounts may qualify for extended payment terms after credit approval." },
  { q: "How are orders delivered internationally?", a: "We work with licensed defense logistics carriers for international shipments. All exports comply with applicable regulations and include full documentation." },
  { q: "Can I request product samples before committing to a large order?", a: "In many cases yes. Use the Request Sample button on any product page to initiate a sample request." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">Get In Touch</span>
          <h1 className="text-[64px] leading-[72px] font-bold tracking-[-0.03em] text-white mb-4">Contact Us</h1>
          <p className="text-n3 text-[18px] leading-7">
            Our B2B defense specialists are ready to assist with product inquiries, bulk orders, compliance questions, and partnership opportunities.
          </p>
        </div>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="glass-card rounded-xl p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin size={20} className="text-primary" />
            </div>
            <h3 className="text-white font-semibold mb-2">Address</h3>
            <p className="text-n4 text-sm leading-6">1234 Defense Blvd<br />Arlington, VA 22201<br />United States</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone size={20} className="text-primary" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone & WhatsApp</h3>
            <p className="text-n4 text-sm leading-6">
              <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a><br />
              <a href="https://wa.me/18005550200" className="hover:text-white transition-colors">+1 (800) 555-0200</a>
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail size={20} className="text-primary" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-n4 text-sm leading-6">
              <a href="mailto:info@marshall-defense.com" className="hover:text-white transition-colors">info@marshall-defense.com</a><br />
              <a href="mailto:sales@marshall-defense.com" className="hover:text-white transition-colors">sales@marshall-defense.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Image */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-3">Send a Message</span>
            <h2 className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-white mb-8">Request a Quote or Partnership</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-n3 text-sm font-medium mb-2">First Name <span className="text-primary">*</span></label>
                  <input type="text" className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-n3 text-sm font-medium mb-2">Last Name <span className="text-primary">*</span></label>
                  <input type="text" className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-n3 text-sm font-medium mb-2">Organization <span className="text-primary">*</span></label>
                <input type="text" className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-n3 text-sm font-medium mb-2">Email Address <span className="text-primary">*</span></label>
                <input type="email" className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-n3 text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-n3 text-sm font-medium mb-2">Inquiry Type</label>
                <select className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none">
                  <option>Product Quote</option>
                  <option>Partnership Inquiry</option>
                  <option>Energetics</option>
                  <option>Compliance/Export</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-n3 text-sm font-medium mb-2">Message <span className="text-primary">*</span></label>
                <textarea rows={5} className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none resize-none" />
              </div>
              <Button variant="solid" size="lg" type="submit" icon={<ArrowUpRight size={18} />}>Send Message</Button>
            </form>
          </div>

          {/* Right Image */}
          <div className="glass-card rounded-xl overflow-hidden flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-3xl">M</span>
              </div>
              <p className="text-n4 text-sm">Office Headquarters</p>
              <p className="text-n5 text-xs mt-1">Arlington, Virginia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-3">FAQ</span>
          <h2 className="text-[48px] leading-[56px] font-bold tracking-[-0.025em] text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-[16px]">{faq.q}</span>
                {openFaq === i ? <Minus size={18} className="text-primary flex-none" /> : <Plus size={18} className="text-n4 flex-none" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-n3 text-[15px] leading-6 border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
