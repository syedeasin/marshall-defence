// src/lib/data.ts

export const CATEGORIES = [
  "All Products",
  "Sporting and Hunting",
  "Ballistic Apparel",
  "Ammunition",
  "Military",
  "Accessories",
  "Components",
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  pdfs: { label: string; url: string }[];
}

export const PRODUCTS: Product[] = [
  // ─── 1. Shotguns & Rifles ──────────────────────────────────
  {
    id: "1",
    slug: "shotguns-rifles",
    name: "Shotguns & Rifles",
    category: "Sporting and Hunting",
    image: "/images/products/shotguns-rifles.webp",
    gallery: [
      "/images/products/shotguns-rifles/gallery-1.webp",
    ],
    description:
        "Invader Semi-Auto Shotgun: Action: Semi-Auto Shotgun, Vertical Magazine System, Gas Operated. Gauge: 12 Gauge. Chamber: 3\". Stock: Tactical Stock. Barrel: 4140 stainless steel drilled rod. Inner surface is hard white chromium plated, outer surface is black chromium plated. Barrel Length: 18\". Magazine Capacity: 5 rounds. Choke: Inner 5 mobile choke. Overall Length: 36.22\". Average Weight: 8.8 Lbs. Optional Colors: Black (ET4IN-11400B) & Red (ET4IN-11401R).",
    specs: [
      { label: "Action", value: "Semi-Auto Shotgun" },
      { label: "Gauge", value: "12 Gauge" },
      { label: "Chamber", value: "3\"" },
      { label: "Stock", value: "Tactical Stock" },
      { label: "Barrel", value: "4140 stainless steel, chromium plated" },
      { label: "Barrel Length", value: "18\"" },
      { label: "Magazine Capacity", value: "5 rounds" },
      { label: "Choke", value: "Inner 5 mobile choke" },
      { label: "Overall Length", value: "36.22\"" },
      { label: "Average Weight", value: "8.8 Lbs" },
    ],
    features: [
      "Vertical Magazine System",
      "Gas Operated",
      "Hard white chromium plated inner surface",
      "Black chromium plated outer surface",
      "Optional Colors: Black & Red",
    ],
    pdfs: [],
  },

  // ─── 2. Shotgun Ammunition ─────────────────────────────────
  {
    id: "2",
    slug: "shotgun-ammunition",
    name: "Shotgun Ammunition",
    category: "Sporting and Hunting",
    image: "/images/products/shotgun-ammunition.webp",
    gallery: [],
    description:
        "Our inquiry: 9mm fully loaded cartridges FMJ brass case boxer primer, 5.56×45 NATO fully loaded cartridges FMJ, .40 ACP fully loaded cartridges FMJ brass case boxer primer, .45 ACP fully loaded cartridges FMJ brass case boxer primer, .22LR fully loaded cartridges FMJ brass case boxer primer, .380 auto fully loaded cartridges FMJ brass case, .223 remington, .308 FMJ, boxer primers. Notes: steel is acceptable for casings if it is the only option but needs to be priced accordingly for steel and not brass – standard grain for each caliber is acceptable, we want to know what is available or purchase first.",
    specs: [
      { label: "9mm", value: "FMJ brass case boxer primer" },
      { label: "5.56×45 NATO", value: "Fully loaded cartridges FMJ" },
      { label: ".40 ACP", value: "FMJ brass case boxer primer" },
      { label: ".45 ACP", value: "FMJ brass case boxer primer" },
      { label: ".22LR", value: "FMJ brass case boxer primer" },
      { label: ".380 Auto", value: "FMJ brass case" },
      { label: ".223 Remington", value: "Available" },
      { label: ".308 FMJ", value: "Available" },
    ],
    features: [
      "Brass case standard",
      "Steel casings available at adjusted pricing",
      "Standard grain per caliber",
      "Boxer primers",
      "Multiple caliber options",
    ],
    pdfs: [],
  },

  // ─── 3. Protection Vests & Helmets ─────────────────────────
  {
    id: "3",
    slug: "protection-vests-helmets",
    name: "Protection Vests & Helmets",
    category: "Ballistic Apparel",
    image: "/images/products/protection-vests-helmets.webp",
    gallery: [],
    description:
        "Customized solutions for your protection. Marshall Defense is one of the most technologically advanced manufacturers of protective equipment in the world. Marshall Defense offers with its team more than 25 years of experience in the ballistic sector. We are experts in technical development, sales, and marketing. We invest all our experience to always develop the best product for our customers. We provide the most innovative armor designs to be used for personal protection equipment and platform protection.",
    specs: [],
    features: [
      "Body Armor",
      "Ballistic Insert Plates",
      "Ballistic Helmets",
      "Ballistic Shields",
      "Add-on Armor Kits",
      "Modular Kits",
      "Spall Liners",
      "Ballistic Blankets",
    ],
    pdfs: [],
  },

  // ─── 4. Night Vision & Optical Gear ────────────────────────
  {
    id: "4",
    slug: "night-vision-optical-gear",
    name: "Night Vision & Optical Gear",
    category: "Military",
    image: "/images/products/night-vision-optical-gear.webp",
    gallery: [],
    description:
        "Putting more emphasis on testing each and every aspect of the system before its release to the End User. Extensive tests are performed at all stages of production to meet and exceed MIL-STD/MIL-SPEC requirements. Spending 30% of our time testing parts and components, followed by 40% testing compatibility and functionality mid-production, and lastly 30% is spent calibrating and performing post-production tests. With emphasis on quality and reliability – the equipment of our clients needs to support them for any operation, in any setting, because there is no room for error. These devices are manufactured to reflect that philosophy: We offer an unmatched 7-Year Limited Warranty, industry leading specifications with no limitations for thermal cores and intensifier tubes.",
    specs: [],
    features: [
      "MIL-STD/MIL-SPEC compliant",
      "7-Year Limited Warranty",
      "30% parts & components testing",
      "40% compatibility & functionality testing",
      "30% calibration & post-production testing",
      "No limitations for thermal cores",
      "No limitations for intensifier tubes",
    ],
    pdfs: [],
  },

  // ─── 5. Pistols ────────────────────────────────────────────
  {
    id: "5",
    slug: "pistols",
    name: "Pistols",
    category: "Military",
    image: "/images/products/pistols.webp",
    gallery: [],
    description:
        "X-Calibur Match: The X-Calibur is our well-known, out-of-the-box competition-ready, flagship. We offer to tow new modifications to further accommodate to needs of our customers, who asked for heavier versions as well as for the option to mount a red dot sight, in order to allow them to use their favorite X-Calibur for more and more disciplines in shooting sport. There are two new options available – Match and Match CO, standing for carrying Optics. They both possess an additional weight of 350g in form of a massive steel dust cover, including a standard Picatinny rail for any accessories shooter may want to attach to his X-Calibur. Additionally, the CO version slide is milled to accept a mounting base for a red dot sight. The red dot mount base can be replaced by micrometric rear sight if needed.",
    specs: [],
    features: [
      "Competition-ready out of the box",
      "Match and Match CO versions available",
      "Additional 350g steel dust cover",
      "Standard Picatinny rail",
      "CO version accepts red dot sight mounting base",
      "Micrometric rear sight option",
    ],
    pdfs: [],
  },

  // ─── 6. Rifles & Sniper Rifles ─────────────────────────────
  {
    id: "6",
    slug: "rifles-sniper-rifles",
    name: "Rifles & Sniper Rifles",
    category: "Military",
    image: "/images/products/rifles-sniper-rifles.webp",
    gallery: [],
    description:
        "MFR56, designed by SYSTEM DEFENCE, is produced in System Defense factories in Turkey. The MFR56 (MULTIFACTIONAL RIFLE) 5.56x45mm Caliber is a multifunctional machine gun. It can be produced as 2 different systems as OPEN BOLT and CLOSED BOLT due to the references of country-based law enforcement agencies. Manufactured by SYSTEM DEFENCE, the MFR56 is specially designed for local operations. In areas and campuses that restrict the movement and maneuvering capabilities of security units, the FR56 transforms with its dimensions, weight, and functions.",
    specs: [
      { label: "Caliber", value: "5.56x45mm" },
      { label: "Type", value: "Multifunctional Machine Gun" },
      { label: "Systems", value: "Open Bolt & Closed Bolt" },
      { label: "Manufacturer", value: "System Defence (Turkey)" },
    ],
    features: [
      "Multifunctional design",
      "Open Bolt and Closed Bolt configurations",
      "Designed for local operations",
      "Compact dimensions for restricted areas",
      "Lightweight and maneuverable",
    ],
    pdfs: [],
  },

  // ─── 7. Flash Bang Hand Grenades ───────────────────────────
  {
    id: "7",
    slug: "flash-bang-hand-grenades",
    name: "Flash Bang Hand Grenades",
    category: "Military",
    image: "/images/products/flash-bang-hand-grenades.webp",
    gallery: [],
    description:
        "1. There will be no particles that will create a shrapnel effect in the flashbangs, and there will be no fragmentation after the function. 2. Flashbangs shall be disposable, single burst, and hand throw type. 3. Light and sound effects will occur instantly with the firing of the flashbang. 4. Flashbangs shall consist of a steel or aluminum body and include pyrotechnic components and an ignition mechanism. 5. Ignition of the flashbang will occur by means of a pyrotechnic retarder and by pulling the pin.",
    specs: [
      { label: "Type", value: "Disposable, single burst, hand throw" },
      { label: "Body", value: "Steel or aluminum" },
      { label: "Ignition", value: "Pyrotechnic retarder, pin-pull" },
      { label: "Effects", value: "Light and sound, instant" },
    ],
    features: [
      "No shrapnel effect",
      "No fragmentation after function",
      "Disposable single burst",
      "Hand throw type",
      "Steel or aluminum body",
      "Pyrotechnic ignition mechanism",
    ],
    pdfs: [],
  },

  // ─── 8. Military Multifunction Shovel ──────────────────────
  {
    id: "8",
    slug: "military-multifunction-shovel",
    name: "Military Multifunction Shovel",
    category: "Military",
    image: "/images/products/military-multifunction-shovel.webp",
    gallery: [],
    description:
        "Military multifunction shovel with comprehensive accessory set for field operations.",
    specs: [
      { label: "Total Length", value: "78cm" },
      { label: "Shovel Head Length", value: "16.5cm" },
      { label: "Shovel Head Width", value: "12.5cm" },
      { label: "Total Weight (incl. accessories)", value: "1045g" },
    ],
    features: [
      "Shovelhead x 1",
      "Handle end x 1",
      "Handle section x 2",
      "Knife x 1",
      "Screwdriver bit x 1",
      "End lid x 1",
      "Chipper x 1",
    ],
    pdfs: [],
  },

  // ─── 9. Surveillance & Optical ─────────────────────────────
  {
    id: "9",
    slug: "surveillance-optical",
    name: "Surveillance & Optical",
    category: "Military",
    image: "/images/products/surveillance-optical.webp",
    gallery: [],
    description:
        "BIN-3 is a passive binocular with adjustable eye distance that can be operated on a single AA battery and can be used as handheld or helmet-mounted night vision binocular/goggles.",
    specs: [
      { label: "Length", value: "105-115mm (4.13-4.53 in)" },
      { label: "Width", value: "93mm (3.66 in)" },
      { label: "Height", value: "82mm (3.23 in)" },
      { label: "Weight", value: "600 grams (1.32 lbs) excl. battery" },
    ],
    features: [
      "Lightweight handheld and clip-on helmet design",
      "Optional manual gain adjustment at different light levels",
      "Infrared illumination",
      "Optional automatic brightness protection",
      "Easy to adjust",
      "Low battery voltage and IR illumination on warnings",
    ],
    pdfs: [],
  },

  // ─── 10. Propellants ───────────────────────────────────────
  {
    id: "10",
    slug: "propellants",
    name: "Propellants",
    category: "Components",
    image: "/images/products/propellants.webp",
    gallery: [],
    description: "Shotshell Ammunition propellant powders available in multiple formulations for various ammunition applications.",
    specs: [],
    features: [
      "Single base powders – Flake",
      "Spherical Powders",
      "Single base – tubular powders",
      "Extruded-modified tubular powders",
      "Rifle (Carbine) Ammunition",
      "Spherical powders",
    ],
    pdfs: [],
  },

  // ─── 11. Primers ───────────────────────────────────────────
  {
    id: "11",
    slug: "primers",
    name: "Primers",
    category: "Components",
    image: "/images/products/primers.webp",
    gallery: [],
    description:
        "Our primers are 10k pcs per box. – 2.1 Million per pallet. Over 18 million are available as of right now. SPP and SRP Primers – Shipped monthly. The CCI primers are boxes of 10k pcs per box. – 2.1 Million per pallet. Over 5 million are available as of right now. CCI Primers – Shipped monthly. First delivery in December. MOQ – 1 container (16.8MM primers).",
    specs: [
      { label: "Box Size", value: "10k pcs per box" },
      { label: "Pallet Quantity", value: "2.1 Million per pallet" },
      { label: "SPP/SRP Availability", value: "Over 18 million" },
      { label: "CCI Availability", value: "Over 5 million" },
      { label: "MOQ", value: "1 container (16.8MM primers)" },
      { label: "Shipping", value: "Monthly" },
    ],
    features: [
      "SPP and SRP Primers available",
      "CCI Primers available",
      "Monthly shipping schedule",
      "Bulk container quantities",
    ],
    pdfs: [],
  },

  // ─── 12. Cleaning Kit ──────────────────────────────────────
  {
    id: "12",
    slug: "cleaning-kit",
    name: "Cleaning Kit",
    category: "Accessories",
    image: "/images/products/cleaning-kit.webp",
    gallery: [],
    description: "Comprehensive firearm cleaning and maintenance product line covering all weapon types and applications.",
    specs: [],
    features: [
      "Gun Lubricants",
      "Gun Cleaners",
      "Ultrasonic Products",
      "Airsoft / Airgun Lubricants",
      "Paintball",
      "Black powder",
      "Specialty Products",
      "Cleaning Kits",
      "Delux Cleaning Kits",
      "Tactical + LE Cleaning Kits",
      "Cleaning Accessories",
      "Retail packaging",
      "Retail & POP Displays",
    ],
    pdfs: [
      { label: "Marshall Cleaning Kits Catalog", url: "/pdfs/MARSHALL-CLEANING-KITS.pdf" },
    ],
  },

  // ─── 13. Firearm Accessories ───────────────────────────────
  {
    id: "13",
    slug: "firearm-accessories",
    name: "Firearm Accessories",
    category: "Accessories",
    image: "/images/products/firearm-accessories.webp",
    gallery: [],
    description: "Comprehensive range of firearm accessories covering AR, AK, and shotgun platforms.",
    specs: [],
    features: [
      "AR – AK Stock Models",
      "Handguard Models",
      "AR – Ak Pistol Grip Models",
      "AR – Ak Buffer Tube Models",
      "AR – Ak Parts and Upgrades Models",
      "AR – 15 Metal Parts",
      "Magazines",
      "Cases",
      "Shotguns Stocks",
      "Shotguns Handguards",
    ],
    pdfs: [
      { label: "Marshall Defence Accessories Catalog", url: "/pdfs/Marshall-Defence-Accessories_.pdf" },
    ],
  },

  // ─── 14. Tactical Apparel ──────────────────────────────────
  {
    id: "14",
    slug: "tactical-apparel",
    name: "Tactical Apparel",
    category: "Ballistic Apparel",
    image: "/images/products/tactical-apparel.webp",
    gallery: [],
    description:
        "09246 / Urban Go Pack: The Urban go pack is a revolution of design. It is not just a tactical backpack. It's a Go Pack! This high quality pack has a place for everything. Padded laptop sleeve, will fit up to 15.6\" laptop. The advanced high cushion back pad and shoulder straps allow for breathability and impact reduction. Main compartment comes with document sleeve and mesh pocket. Hydration bladder compatible (bladder not included).",
    specs: [
      { label: "Size", value: "22\"x12\"x7\"" },
      { label: "Capacity", value: "30-40L" },
      { label: "Weight", value: "3.5lbs" },
      { label: "Package", value: "660 x 40 x 46cm / 10pcs" },
    ],
    features: [
      "Padded laptop sleeve (up to 15.6\")",
      "High cushion back pad",
      "Breathable shoulder straps",
      "Document sleeve and mesh pocket",
      "Hydration bladder compatible",
      "Impact reduction design",
    ],
    pdfs: [],
  },
];
