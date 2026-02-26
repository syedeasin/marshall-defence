"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check } from "lucide-react";

type CapItem = {
    key: string;
    topTitle: string;
    title: string;
    leftTitle: string;
    leftDesc: string;
    img: string;
};

export default function CapabilitiesSection() {
    const items: CapItem[] = useMemo(
        () => [
            {
                key: "manufacturing",
                topTitle: "CAPABILITIES",
                title: "End-to-End Defense\nCapabilities",
                leftTitle: "Manufacturing & Sourcing",
                leftDesc:
                    "Trusted partners ensure compliant production, consistent quality, and reliable supply.",
                img: "/images/manufacturing-sourcing.webp",
            },
            {
                key: "quality",
                topTitle: "CAPABILITIES",
                title: "End-to-End Defense\nCapabilities",
                leftTitle: "Quality Control & Testing",
                leftDesc:
                    "Inspection workflows and verification standards help ensure dependable performance.",
                img: "/images/quality-control-testing.webp",
            },
            {
                key: "export",
                topTitle: "CAPABILITIES",
                title: "End-to-End Defense\nCapabilities",
                leftTitle: "Export & Compliance Handling",
                leftDesc:
                    "Documentation, licensing, and regulatory alignment handled with accuracy and care.",
                img: "/images/export-compliance-handling.webp",
            },
            {
                key: "logistics",
                topTitle: "CAPABILITIES",
                title: "End-to-End Defense\nCapabilities",
                leftTitle: "Global Logistics & Customs Clearance",
                leftDesc:
                    "Secure global delivery and customs coordination for predictable, on-time fulfillment.",
                img: "/images/global-logistics-customs-clearance.webp",
            },
        ],
        []
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    /* Drive active index from scroll progress through the sticky wrapper */
    useEffect(() => {
        const onScroll = () => {
            if (!wrapperRef.current) return;
            const { top } = wrapperRef.current.getBoundingClientRect();
            const totalScrollable =
                wrapperRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;
            const scrolled = Math.max(0, -top);
            const progress = Math.min(1, scrolled / totalScrollable);
            const idx = Math.min(
                Math.floor(progress * items.length),
                items.length - 1
            );
            setActive(idx);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [items.length]);

    return (
        /* Wrapper is 4 × 100vh tall — section sticks inside it */
        <div ref={wrapperRef} style={{ height: `${items.length * 100}vh` }}>
            <section className="sticky top-0 h-screen overflow-hidden flex flex-col py-[120px] border-t border-n9 bg-black">

                {/* Inner content — fills the space between the two 120px paddings */}
                <div className="flex-1 min-h-0 max-w-7xl mx-auto w-full px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] h-full">

                        {/* ─── LEFT: image panel ─── */}
                        <div className="order-2 lg:order-1 h-[45vh] lg:h-full">
                            <div className="relative h-full rounded-2xl border border-w10 overflow-hidden">

                                {/* All images stacked — active one fades in */}
                                {items.map((item, i) => (
                                    <Image
                                        key={item.img}
                                        src={item.img}
                                        alt={item.leftTitle}
                                        fill
                                        priority={i === 0}
                                        className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
                                            i === active ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                ))}

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                                {/* Overlay text — all items stacked, active fades in */}
                                {items.map((item, i) => (
                                    <div
                                        key={item.key}
                                        className={`absolute inset-x-0 bottom-0 p-8 md:p-12 transition-opacity duration-700 ease-in-out ${
                                            i === active ? "opacity-100" : "opacity-0"
                                        }`}
                                    >
                                        <h5 className="text-h5 tracking-h5 font-bold text-white">
                                            {item.leftTitle}
                                        </h5>
                                        <p className="mt-2 text-p4 md:text-p3 tracking-p font-normal text-n2 max-w-[46ch]">
                                            {item.leftDesc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ─── RIGHT: label + heading + capability list ─── */}
                        <div className="order-1 lg:order-2 flex flex-col lg:h-full">

                            {/* Label + heading — pinned to the top */}
                            <div className="text-left">
                                <div className="inline-flex items-center gap-1 uppercase">
                                    <span className="text-n2 text-p3 tracking-p font-normal">[</span>
                                    <span className="text-n2 text-p4 tracking-p font-normal">
                                        {items[0].topTitle}
                                    </span>
                                    <span className="text-n2 text-p3 tracking-p font-normal">]</span>
                                </div>
                                <h3 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white whitespace-pre-line">
                                    {items[0].title}
                                </h3>
                            </div>

                            {/* Spacer — pushes list to the bottom on desktop */}
                            <div className="flex-1" />

                            {/* Desktop capability list */}
                            <div className="hidden md:block">
                                {items.map((it, idx) => {
                                    const isActive = idx === active;
                                    return (
                                        <button
                                            key={it.key}
                                            onClick={() => setActive(idx)}
                                            className="w-full text-left flex items-center gap-4 py-6 border-b border-n9"
                                        >
                                            <Check
                                                size={18}
                                                className={`flex-shrink-0 transition-colors duration-500 ${
                                                    isActive ? "text-white" : "text-n2"
                                                }`}
                                            />
                                            <span
                                                className={`text-h5 tracking-h5 font-bold transition-colors duration-500 ${
                                                    isActive ? "text-white" : "text-n2"
                                                }`}
                                            >
                                                {it.leftTitle}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Mobile: horizontal tabs */}
                            <div className="md:hidden mt-4 -mx-4 px-4 overflow-x-auto no-scrollbar">
                                <div className="flex gap-3 min-w-max">
                                    {items.map((it, idx) => {
                                        const isActive = idx === active;
                                        return (
                                            <button
                                                key={it.key}
                                                onClick={() => setActive(idx)}
                                                className={`whitespace-nowrap rounded-full border px-4 py-2 text-btn2 tracking-btn2 font-semibold uppercase transition-colors duration-300 ${
                                                    isActive
                                                        ? "border-w10 bg-w3 text-white"
                                                        : "border-n9 bg-transparent text-n2"
                                                }`}
                                            >
                                                {it.leftTitle}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* /RIGHT */}
                    </div>
                </div>
            </section>
        </div>
    );
}
