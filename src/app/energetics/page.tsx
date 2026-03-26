// src/app/energetics/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */
type TableRow = string[];

interface DataTable {
    headers: string[];
    rows: TableRow[];
}

interface DataSheetSection {
    subtitle?: string;
    table: DataTable;
    tableVariant?: "numbered" | "labeled";
}

interface DataSheet {
    bracketLabel: string;
    title: string;
    sections: DataSheetSection[];
}

/* ═══════════════════════════════════════════════════════════════
   TABLE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function TechTable({ headers, rows, variant = "numbered" }: DataTable & { variant?: "numbered" | "labeled" }) {
    return (
        <div className="border border-n8 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                    <thead>
                    <tr className="bg-n9">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className={`py-4 px-6 text-p5 tracking-p font-medium text-n3 text-left ${
                                    i === 0 ? (variant === "numbered" ? "w-[80px] text-center" : "w-[160px]") : ""
                                } ${i < headers.length - 1 ? "border-r border-n8" : ""}`}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row, ri) => {
                        const isSubHeader =
                            row.length >= 2 &&
                            row[0] === "" &&
                            row.slice(2).every((c) => c === "");

                        const rowBg = ri % 2 === 0 ? "bg-white/5" : "bg-black";

                        if (isSubHeader) {
                            return (
                                <tr key={ri} className={`border-t border-n8 ${rowBg}`}>
                                    <td
                                        colSpan={headers.length}
                                        className="py-4 px-6 text-p4 tracking-p font-semibold text-white"
                                    >
                                        {row[1]}
                                    </td>
                                </tr>
                            );
                        }

                        return (
                            <tr key={ri} className={`border-t border-n8 ${rowBg}`}>
                                {row.map((cell, ci) => (
                                    <td
                                        key={ci}
                                        className={`py-4 px-6 text-p5 tracking-p font-normal ${
                                            ci === 0
                                                ? variant === "numbered"
                                                    ? "text-n4 text-center w-[80px]"
                                                    : "text-n4 text-left w-[160px]"
                                                : ci === 1
                                                    ? "text-n2"
                                                    : "text-white"
                                        } ${ci < row.length - 1 ? "border-r border-n8" : ""}`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   DATA SHEET SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function DataSheetBlock({ sheet }: { sheet: DataSheet }) {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Bracket label */}
            <div className="text-center mb-3">
                <div className="inline-flex items-center gap-1 uppercase">
                    <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">[</span>
                    <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">
            {sheet.bracketLabel}
          </span>
                    <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">]</span>
                </div>
            </div>

            {/* Title */}
            <AnimatedHeading as="h2" className="text-h4 md:text-h3 tracking-h3 font-bold text-white text-center uppercase mb-12">
                {sheet.title}
            </AnimatedHeading>

            {/* Sections */}
            <div className="space-y-12">
                {sheet.sections.map((section, i) => (
                    <div key={i}>
                        {section.subtitle && (
                            <h3 className="text-h5 tracking-h5 font-bold text-white mb-6">
                                {section.subtitle}
                            </h3>
                        )}
                        <TechTable headers={section.table.headers} rows={section.table.rows} variant={section.tableVariant ?? "numbered"} />
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════
   ALL TECHNICAL DATA
   ═══════════════════════════════════════════════════════════════ */

const tntSheet: DataSheet = {
    bracketLabel: "TNT - Technical Data",
    title: "Technical Data Sheet - TNT Explosive",
    sections: [
        {
            table: {
                headers: ["No.", "Technical Specification", "Range Requirements"],
                rows: [
                    ["1", "Outer appearance:", "Cast charges or flakes"],
                    ["2", "Color:", "Yellow (light yellow to dark yellow)"],
                    ["3", "Solidification point,% not less than", "80.2"],
                    ["4", "Moisture and volatile substances, % not more than", "0.1"],
                    ["5", "Acidity as per sulfuric acid, % not more than", "0.01"],
                    ["6", "Insoluble matters in acetone (or benzene/ toluene) % not more than", "0.05"],
                    ["7", "Sodium, not more than %", "0.001"],
                    ["8", "Shelf life", "min 20 years"],
                    ["", "TNT Flakes", ""],
                    ["9", "Thickness of flake, average: max, mm", "0.635"],
                    ["10", "Thickness of flake max: max, mm", "1.016"],
                    ["", "TNT cast charges (booster)", ""],
                    ["11", "TNT weight per each cast charge (booster), g", "400"],
                    ["12", "Specific weight, g/cm³", "1.35 ÷ 1.61"],
                    ["13", "Average diameter, mm", "90 ÷ 120"],
                    ["14", "Average thickness, mm", "30 ÷ 40"],
                ],
            },
        },
    ],
};

const c4eSheet: DataSheet = {
    bracketLabel: "C4-E - Technical Data",
    title: "C4-E Technical Data Sheet",
    sections: [
        {
            tableVariant: "labeled",
            table: {
                headers: ["Test Item", "Requirement", "Test Result"],
                rows: [
                    ["Appearance", "White or light yellow, plastic-like particles. May contain a small amount of fine powder. No visible mechanical impurities.", "Pass"],
                    ["RDX Content %", "90 – 91%", "91%"],
                    ["Binder Content %", "9 – 10%", "9%"],
                    ["Density, g/cm", "1.58-1.60", "1.59 g/cm"],
                    ["Detonation Velocity, m/s", ">8000m/s", "8100m/s"],
                    ["Oxygen Balance", "-21", "-21%"],
                    ["Water Resistance", "Suitable for 24 hours", "Conforms"],
                    ["Mechanical Properties", "Flexible, shape-retaining", "Conforms"],
                    ["Sensitivity to initiation", "Low (impact & friction)", "Conforms"],
                ],
            },
        },
    ],
};

const rdxSheet: DataSheet = {
    bracketLabel: "RDX - Technical Data",
    title: "RDX Technical Data Sheet",
    sections: [
        {
            table: {
                headers: ["No.", "Technical Specification", "Range Requirements"],
                rows: [
                    ["1", "Outer appearance", "Small crystalline form, odorless, with no impurities White, visible"],
                    ["2", "Melting Point", "Minimum 200 °C"],
                    ["3", "Acidity (as HNO₃)", "Maximum 0.05%"],
                    ["4", "Insoluble Particles Remaining on U.S. Standard Sieve No. 60", "Maximum 5 particles"],
                    ["5", "Total Content of Insoluble Impurities in Marshall Defense", "Maximum 0.05%"],
                    ["6", "Total Content of Insoluble Inorganic Substances", "Maximum 0.03%"],
                    ["7", "Impact Sensitivity (Kast Method)", "Maximum 84%"],
                    ["", "Particle Size Distribution: Standard Distribution", ""],
                    ["1", "Passing through U.S. Standard Sieve No. 20", "95–100%"],
                    ["2", "Passing through U.S. Standard Sieve No. 50", "70–100%"],
                    ["3", "Passing through U.S. Standard Sieve No. 100", "20–90%"],
                ],
            },
        },
    ],
};

const compBSheet: DataSheet = {
    bracketLabel: "Comp B - Technical Data",
    title: "Comp B Explosive Technical Data Sheet",
    sections: [
        {
            subtitle: "1. Technical specification of Hexolite explosive TNHH-TH40 particle and flake",
            table: {
                headers: ["No.", "Criteria", "Requirements"],
                rows: [
                    ["1", "Outer appearance:", "Solid, particle.\nYellow/brown, no impurities visible to the unaided eye."],
                    ["2", "Ratio TNT/RDX/WAX, %", "39,5 ± 2,3 / 59,5 ± 2,0 / 1,0 ± 0,3"],
                    ["3", "Particle size", ""],
                    ["4", "The passing rate through a 4 mesh sieve (hole 4.75 mm), %, not less than", "98"],
                    ["5", "The passing rate through a 40 mesh sieve (hole 0.0425 mm), %, not greater than", "8"],
                    ["6", "Melting temperature, °C", "80 ± 1"],
                    ["7", "Loose bulk density, g/cm³, not less than", "0.9"],
                    ["8", "Volatile substance content, %, not greater than", "0.2"],
                    ["14", "Ash content, %, not greater than", "0.1"],
                    ["8", "The work-generating capacity of the pendulum, compared to TNT, %, not less than", "120"],
                    ["14", "Detonation velocity (at a density of 1.65 g/cm³), m/s", "8,500 ± 400"],
                ],
            },
        },
        {
            subtitle: "2. Technical specifications of Hexolite explosive TNHH-TH40 cast charge",
            table: {
                headers: ["No.", "Criteria", "Requirements"],
                rows: [
                    ["1", "Outer appearance", "Cylindrical explosive charge cast in a 0.5 mm thick paper tube.\n1st type: 175 gram, Diameter Ø36 ± 1 mm\n2nd type: 400 gram, Diameter Ø54 ± 1 mm"],
                    ["2", "Ratio TNT/RDX/WAX, %", "39,5 ± 2,3 / 59,5 ± 2,0 / 1,0 ± 0,3"],
                    ["3", "Melting temperature, °C", "80 ± 1"],
                    ["4", "Volatile substance content, %, not greater than", "0.2"],
                    ["5", "Ash content, %, not greater than", "0.1"],
                    ["6", "The work-generating capacity of the pendulum, compared to TNT, %, not less than", "120"],
                    ["7", "Detonation velocity (at a density of 1.65 g/cm³), m/s", "8,050 ± 400"],
                ],
            },
        },
    ],
};

const hmxSheet: DataSheet = {
    bracketLabel: "HMX - Technical Data",
    title: "HMX Technical Data Sheet",
    sections: [
        {
            subtitle: "1. Appearance and dimension",
            table: {
                headers: ["No.", "Technical Specification", "Range Requirements"],
                rows: [
                    ["1", "Outer appearance", "Crystal, uniform small particles"],
                    ["2", "Color", "White"],
                    ["3", "Particle size", "The passing rate through a 48mesh sieve (48 holes/cm²) is 100%."],
                ],
            },
        },
        {
            subtitle: "2. Physicochemical properties and technical explosive performance of HMX explosive",
            table: {
                headers: ["No.", "Criteria", "Unit", "Requirement", "Note"],
                rows: [
                    ["1", "Melting temperature", "°C", "≥ 270", ""],
                    ["2", "Acidity (calculated as acetic acid)", "%", "≤ 0.05", ""],
                    ["3", "Insoluble substances in acetone", "%", "≤ 0.05", ""],
                    ["4", "Impact sensitivity", "%", "84 ÷ 96", ""],
                    ["5", "Work capacity", "% TNT", "≥ 140", ""],
                    ["6", "Detonation velocity (at a density of 1.25 g/cm³)", "m/s", "≥ 6,700", ""],
                    ["7", "Moisture content (%)", "%", "≤ 0.1", ""],
                ],
            },
        },
    ],
};

const allSheets: DataSheet[] = [tntSheet, c4eSheet, rdxSheet, compBSheet, hmxSheet];

/* ═══════════════════════════════════════════════════════════════
   CATEGORIES DATA
   ═══════════════════════════════════════════════════════════════ */
const categories = [
    { title: "Sporting & Hunting", image: "/images/products/shotgun-ammunition.webp", href: "/products?category=Sporting and Hunting" },
    { title: "Ballistic Apparel", image: "/images/products/tactical-apparel.webp", href: "/products?category=Ballistic Apparel" },
    { title: "Ammunitions", image: "/images/products/propellants.webp", href: "/products?category=Ammunition" },
    { title: "Military", image: "/images/products/night-vision-optical-gear.webp", href: "/products?category=Military" },
    { title: "Accessories", image: "/images/products/cleaning-kit.webp", href: "/products?category=Accessories" },
    { title: "Components", image: "/images/products/primers.webp", href: "/products?category=Components" },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function EnergeticsPage() {
    return (
        <>
            {/* ═══ HERO BANNER ═══ */}
            <section className="relative h-[60vh] md:h-[612px] flex items-end overflow-hidden border-b border-n8">
                <Image
                    src="/images/energetics-background.jpg"
                    alt="Military Energetics"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pb-12 md:pb-20">
                    <div className="inline-flex items-center gap-1 mb-2">
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">[</span>
                        <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">Products</span>
                        <span className="text-n5 text-[13px] font-medium tracking-[0.12em]">]</span>
                    </div>

                    <AnimatedHeading as="h1" className="text-h3 md:text-h2 tracking-h3 md:tracking-h2 font-bold text-white mb-4">
                        Military Energetics
                    </AnimatedHeading>
                    <p className="text-p4 md:text-p3 tracking-p font-normal text-n2 max-w-xl">
                        It is our quality, attention to detail and level of service that enables us to stand out from other suppliers and remain at the forefront of the industry.
                    </p>
                </div>
            </section>

            {/* ═══ TECHNICAL DATA SHEETS ═══ */}
            {allSheets.map((sheet, i) => (
                <div key={i}>
                    <DataSheetBlock sheet={sheet} />
                </div>
            ))}

            {/* ═══ CATEGORIES SECTION ═══ */}
            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-1 uppercase mb-2">
                            <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">[</span>
                            <span className="text-n4 text-[13px] font-semibold tracking-[0.18em] uppercase">Categories</span>
                            <span className="text-n4 text-[13px] font-medium tracking-[0.12em]">]</span>
                        </div>
                        <AnimatedHeading as="h2" className="text-h4 md:text-h3 tracking-h3 font-bold text-white">
                            Browse Our Full
                            <br />
                            Product Categories
                        </AnimatedHeading>
                    </div>
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-1 text-btn1 tracking-btn1 font-semibold uppercase text-white underline underline-offset-4 hover:text-n2 transition-colors"
                    >
                        Product Catalog <ChevronRight size={16} />
                    </Link>
                </div>

                {/* Category cards — 6 columns on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat) => (
                        <Link key={cat.title} href={cat.href} className="group block">
                            <div className="rounded-2xl overflow-hidden bg-[#0D0D0D] aspect-square flex items-center justify-center">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    width={200}
                                    height={200}
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                                />
                            </div>
                            <p className="mt-3 text-p5 tracking-p font-normal text-n2 text-center group-hover:text-white transition-colors">
                                {cat.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ═══ CTA SECTION ═══ */}
            <CTASection />
        </>
    );
}