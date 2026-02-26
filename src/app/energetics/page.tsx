"use client";
import { ArrowUpRight, Flame, Zap, Target, Shield, AlertTriangle, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const FormSection = ({
  topLabel,
  title,
  subtitle,
  fields,
  id,
}: {
  topLabel: string;
  title: string;
  subtitle?: string;
  fields: { label: string; type: string; required?: boolean; options?: string[] }[];
  id: string;
}) => (
  <section id={id} className="py-16 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/5">
    <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-3">{topLabel}</span>
    <h2 className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-white mb-2">{title}</h2>
    {subtitle && <p className="text-n3 text-[18px] leading-7 mb-8 max-w-2xl">{subtitle}</p>}
    {!subtitle && <div className="mb-8" />}
    <form className="glass-card rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
      {fields.map((f, i) => (
        <div key={i} className={f.type === "textarea" ? "md:col-span-2" : ""}>
          <label className="block text-n3 text-sm font-medium mb-2">{f.label}{f.required && <span className="text-primary ml-1">*</span>}</label>
          {f.type === "select" ? (
            <select className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none">
              <option value="">Select {f.label}</option>
              {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : f.type === "textarea" ? (
            <textarea rows={4} className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none resize-none" placeholder={f.label} />
          ) : (
            <input type={f.type} className="w-full bg-n10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none" placeholder={f.label} />
          )}
        </div>
      ))}
      <div className="md:col-span-2 mt-2">
        <Button variant="solid" size="lg" type="submit" icon={<ArrowUpRight size={18} />}>Submit Request</Button>
      </div>
    </form>
  </section>
);

const serviceCards = [
  { icon: <Flame size={24} />, title: "Pyrotechnics Supply", desc: "Military-grade pyrotechnic devices for training and operational use." },
  { icon: <Zap size={24} />, title: "Explosive Ordnance", desc: "Certified EOD equipment and training munitions for professional units." },
  { icon: <Target size={24} />, title: "Demolition Systems", desc: "Controlled demolition systems for engineering and breaching operations." },
  { icon: <Shield size={24} />, title: "Counter-IED Solutions", desc: "Detection, neutralization, and protection against improvised devices." },
  { icon: <AlertTriangle size={24} />, title: "Safety & Compliance", desc: "Full regulatory support for energetics acquisition and handling." },
  { icon: <FileText size={24} />, title: "Technical Consulting", desc: "Expert guidance on energetics selection, testing, and deployment." },
];

export default function EnergeticsPage() {
  return (
    <>
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">Energetics</span>
        <h1 className="text-[64px] leading-[72px] font-bold tracking-[-0.03em] text-white mb-4">Energetics & Munitions</h1>
        <p className="text-n3 text-[18px] leading-7 max-w-2xl mx-auto">
          Certified supply and consulting for military-grade energetics. All requests are subject to compliance review.
        </p>
      </section>

      <FormSection id="form1" topLabel="Section 01" title="Authorized Personnel Registration" fields={[
        { label: "Full Name", type: "text", required: true },
        { label: "Military/Agency ID", type: "text", required: true },
        { label: "Organization", type: "text", required: true },
        { label: "Country", type: "text", required: true },
        { label: "Email Address", type: "email", required: true },
        { label: "Phone Number", type: "tel" },
        { label: "Security Clearance Level", type: "select", options: ["None", "Confidential", "Secret", "Top Secret", "TS/SCI"] },
        { label: "Additional Notes", type: "textarea" },
      ]} />

      <FormSection id="form2" topLabel="Section 02" title="Pyrotechnics Request Form" subtitle="Submit a request for pyrotechnic training devices, smoke signals, and illumination munitions." fields={[
        { label: "Item Type", type: "select", options: ["Smoke Signal", "Illumination Flare", "Training Grenade", "Trip Flare", "Star Cluster"], required: true },
        { label: "Quantity Required", type: "number", required: true },
        { label: "Delivery Location", type: "text", required: true },
        { label: "Required Date", type: "date", required: true },
        { label: "End-Use Certificate", type: "text" },
        { label: "Special Requirements", type: "textarea" },
      ]} />

      <FormSection id="form3" topLabel="Section 03" title="Explosive Ordnance Inquiry" subtitle="Inquire about EOD equipment, training munitions, and controlled explosive devices." fields={[
        { label: "Organization Name", type: "text", required: true },
        { label: "Contact Person", type: "text", required: true },
        { label: "Email", type: "email", required: true },
        { label: "Product Category", type: "select", options: ["Training Munitions", "Practice Charges", "Initiating Systems", "Detonators", "Demo Kits"] },
        { label: "Intended Use", type: "textarea", required: true },
      ]} />

      <FormSection id="form4" topLabel="Section 04" title="Demolition Systems Request" subtitle="Technical forms for controlled demolition and breaching operations." fields={[
        { label: "Unit/Agency", type: "text", required: true },
        { label: "Commanding Officer", type: "text" },
        { label: "Operation Type", type: "select", options: ["Training", "Operational", "Research", "Evaluation"] },
        { label: "System Type", type: "select", options: ["Linear Charge", "Shaped Charge", "Breaching Kit", "Obstacle Clearance", "Custom"] },
        { label: "Quantity", type: "number" },
        { label: "Target Environment", type: "text" },
        { label: "Tactical Notes", type: "textarea" },
      ]} />

      <FormSection id="form5" topLabel="Section 05" title="Counter-IED Solutions Request" subtitle="Protective measures, detection equipment, and training programs." fields={[
        { label: "Requesting Organization", type: "text", required: true },
        { label: "Country of Deployment", type: "text", required: true },
        { label: "Threat Environment", type: "select", options: ["Urban", "Desert", "Jungle", "Mountain", "Mixed"] },
        { label: "Solution Type", type: "select", options: ["Detection Equipment", "ECM/Jamming", "Protective Armor", "Training Program", "Consulting"] },
        { label: "Personnel Count", type: "number" },
        { label: "Operational Context", type: "textarea", required: true },
      ]} />

      <FormSection id="form6" topLabel="Section 06" title="Compliance & Export Documentation" subtitle="Compliance review and ITAR/EAR export documentation for energetics procurement." fields={[
        { label: "Applicant Name", type: "text", required: true },
        { label: "Applicant Organization", type: "text", required: true },
        { label: "Destination Country", type: "text", required: true },
        { label: "Export License Number", type: "text" },
        { label: "End-User Certificate (EUC) Number", type: "text" },
        { label: "Intended End-Use", type: "textarea", required: true },
      ]} />

      <FormSection id="form7" topLabel="Section 07" title="Technical Consulting Request" subtitle="Request expert guidance on energetics selection, testing, and deployment protocols." fields={[
        { label: "Organization", type: "text", required: true },
        { label: "Technical Contact", type: "text", required: true },
        { label: "Email", type: "email", required: true },
        { label: "Consultation Type", type: "select", options: ["Product Selection", "Safety Review", "Field Testing", "Training Design", "Regulatory Compliance"] },
        { label: "Timeline", type: "select", options: ["Immediate (1-2 weeks)", "Short-term (1 month)", "Medium-term (3 months)", "Long-term (6+ months)"] },
        { label: "Project Description", type: "textarea", required: true },
      ]} />

      <FormSection id="form8" topLabel="Section 08" title="Safety Assessment Form" subtitle="Mandatory safety and regulatory assessment for all energetics procurements." fields={[
        { label: "Safety Officer Name", type: "text", required: true },
        { label: "Safety Officer Certification", type: "text", required: true },
        { label: "Storage Facility Type", type: "select", options: ["Approved Magazine", "Hardened Bunker", "Field Storage", "None - Will Acquire"] },
        { label: "Transport Method", type: "select", options: ["Military Vehicle", "Certified Carrier", "Air Freight", "Other"] },
        { label: "Environmental Risk Level", type: "select", options: ["Low", "Medium", "High", "Classified"] },
        { label: "Safety Protocol Description", type: "textarea", required: true },
      ]} />

      {/* Services Cards */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-2">Services</span>
            <h2 className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-white">Energetics Capabilities</h2>
          </div>
          <div className="flex items-end">
            <p className="text-n3 text-[16px] leading-6">Our energetics division supports all aspects of military and law enforcement energetics procurement, handling, and compliance.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCards.map((c, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-center">
              <div className="text-primary mb-3 flex justify-center">{c.icon}</div>
              <h4 className="text-white font-semibold text-xs mb-2">{c.title}</h4>
              <p className="text-n4 text-xs leading-4 hidden lg:block">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection topLabel="Energetics" title="Ready to Discuss Your Energetics Needs?" description="Our certified team is ready to assist with procurement, compliance, and deployment." />
    </>
  );
}
