import { ArrowUpRight, Shield, Target, Award, Users, Globe, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const values = [
  { icon: <Shield size={24} />, title: "Integrity", desc: "We operate with transparency and honesty in every partnership and transaction." },
  { icon: <Target size={24} />, title: "Precision", desc: "We source only products that meet the highest accuracy and reliability standards." },
  { icon: <Award size={24} />, title: "Excellence", desc: "Continuous improvement drives our operations and customer service model." },
  { icon: <Users size={24} />, title: "Partnership", desc: "We build long-term relationships, not just one-time transactions." },
  { icon: <Globe size={24} />, title: "Global Reach", desc: "Serving defense communities across six continents with seamless logistics." },
  { icon: <Zap size={24} />, title: "Innovation", desc: "We stay ahead of evolving defense technology to keep clients equipped." },
];

const team = [
  { name: "Col. James Marshall (Ret.)", role: "Founder & CEO", bio: "30 years military service. Former DoD procurement officer." },
  { name: "Sarah Chen", role: "Chief Operations Officer", bio: "Supply chain expert with 15 years in defense logistics." },
  { name: "Lt. Col. Marcus Wade (Ret.)", role: "VP Business Development", bio: "Former Army Special Forces with deep procurement expertise." },
  { name: "Elena Vasquez", role: "Director of Compliance", bio: "ITAR/EAR compliance specialist with global export experience." },
  { name: "David Park", role: "Head of Technical Solutions", bio: "Former SOCOM weapons instructor and product specialist." },
  { name: "Rachel Torres", role: "VP Client Relations", bio: "15 years managing government and enterprise defense accounts." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">About Us</span>
        <h1 className="text-[64px] leading-[72px] font-bold tracking-[-0.03em] text-white mb-6">
          Two Decades of Trusted<br />Defense Supply
        </h1>
      </section>

      {/* Text Section */}
      <section className="py-8 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5">
        <p className="text-[20px] leading-8 text-n3 mb-6">
          Marshall-Defense was founded in 2004 by Colonel James Marshall (Ret.) with a singular mission: to provide military, law enforcement, and government agencies with the highest-quality defense equipment available — reliably, compliantly, and efficiently.
        </p>
        <p className="text-[18px] leading-7 text-n4 mb-6">
          What began as a small procurement consultancy has grown into a globally recognized B2B defense supplier operating in over 50 countries. Our catalog includes thousands of products spanning firearms, ammunition, tactical apparel, optics, communications equipment, and more.
        </p>
        <p className="text-[18px] leading-7 text-n4">
          We are GSA schedule contractors, fully ITAR and EAR compliant, and maintain strict quality assurance protocols across all product categories. Our logistics network ensures secure, on-time delivery regardless of destination.
        </p>
      </section>

      {/* 2-col Feature */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">Our Mission</span>
            <h2 className="text-[48px] leading-[56px] font-bold tracking-[-0.025em] text-white mb-6">Empowering Defense Through Reliable Supply</h2>
            <p className="text-n3 text-[18px] leading-7 mb-6">
              Our mission is to ensure that those who defend freedom and security have access to the best equipment available. We eliminate procurement friction and deliver certainty.
            </p>
            <div className="space-y-4 mb-8">
              {["ISO 9001:2015 Certified", "GSA Schedule Contractor", "ITAR/EAR Compliant", "NATO Supply Chain Partner"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-none" />
                  <span className="text-n2 text-[16px]">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="solid" size="lg" href="/products" icon={<ArrowUpRight size={18} />}>View Our Products</Button>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[{ n: "20+", l: "Years Experience" }, { n: "50+", l: "Countries Served" }, { n: "500+", l: "Products Available" }, { n: "98%", l: "Client Retention" }].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-[40px] font-bold text-primary leading-none mb-2">{s.n}</div>
                  <div className="text-n3 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 cards - Values */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-2">Our Values</span>
          <h2 className="text-[48px] leading-[56px] font-bold tracking-[-0.025em] text-white">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="text-primary mb-4">{v.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-n4 text-sm leading-6">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-2">Leadership</span>
          <h2 className="text-[48px] leading-[56px] font-bold tracking-[-0.025em] text-white">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">{m.name[0]}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{m.name}</h3>
              <p className="text-primary text-sm mb-3">{m.role}</p>
              <p className="text-n4 text-sm leading-5">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
