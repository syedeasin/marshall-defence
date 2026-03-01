"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { clamp01 } from "@/lib/utils";

type Card = {
    badge: string;
    title: string;
    text: string;
    icon: string;
};

const cards: Card[] = [
    {
        badge: "SHOOTING RANGES",
        title: "Shooting Academies",
        text: "Supplying a vast array of shooting academies across the United States for police tactical training",
        icon: "/images/icons/shooting-academies.svg",
    },
    {
        badge: "MILITARY",
        title: "Infantry Defense",
        text: "For military, police, & defense, Marshall provides frontline products to all military branches",
        icon: "/images/icons/military.svg",
    },
    {
        badge: "LAW ENFORCEMENT",
        title: "Local & State Police",
        text: "Be equipped with the latest body armor and defense products for any situation on the front line",
        icon: "/images/icons/law.svg",
    },
    {
        badge: "COLLECTORS",
        title: "Gun Shows",
        text: "For the collectors, we supply both target range and demonstration firearms for exhibitions",
        icon: "/images/icons/collectors.svg",
    },
    {
        badge: "RETAILERS",
        title: "Sporting Goods",
        text: "Hunting, sporting, or home defense, rely on Marshall to keep you equipped for any situation",
        icon: "/images/icons/retailers.svg",
    },
    {
        badge: "AMMUNITIONS",
        title: "Mixed Munitions",
        text: "Whatever your need, Marshall has you covered with the best Defense options in every category",
        icon: "/images/icons/ammunitions.svg",
    },
];

export default function IndustriesWeServeSection() {
    const wrapRef = useRef<HTMLElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const railRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    // smooth scrolling state
    const targetXRef = useRef<number>(0);
    const currentXRef = useRef<number>(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const sticky = stickyRef.current;
        const container = containerRef.current;
        const rail = railRef.current;
        const track = trackRef.current;

        if (!wrap || !sticky || !container || !rail || !track) return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

        const measure = () => {
            const stickyHeight = sticky.getBoundingClientRect().height;
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const trackWidth = track.scrollWidth;

            const maxTranslate = Math.min(0, containerWidth - trackWidth);
            const scrollDistance = Math.abs(maxTranslate);

            wrap.style.height = `${stickyHeight + scrollDistance}px`;
            rail.style.paddingLeft = `${containerRect.left}px`;

            return { maxTranslate };
        };

        let cached = measure();

        const computeTargetFromScroll = () => {
            const rect = wrap.getBoundingClientRect();
            const stickyH = sticky.getBoundingClientRect().height;

            const totalScroll = wrap.offsetHeight - stickyH;
            const progress = clamp01((-rect.top) / Math.max(1, totalScroll));

            targetXRef.current = cached.maxTranslate * progress;
        };

        const tick = () => {
            const trackEl = trackRef.current;
            if (!trackEl) return;

            const ease = prefersReduced ? 1 : 0.12;

            const target = targetXRef.current;
            const current = currentXRef.current;

            const next = current + (target - current) * ease;
            currentXRef.current = next;

            trackEl.style.transform = `translate3d(${next}px,0,0)`;
            rafRef.current = requestAnimationFrame(tick);
        };

        const onScroll = () => computeTargetFromScroll();
        const onResize = () => {
            cached = measure();
            computeTargetFromScroll();
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        onResize();
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);

            const rafId = rafRef.current;
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <section ref={wrapRef} className="relative overflow-x-clip">
            <div
                ref={stickyRef}
                className="sticky top-[120px] bottom-[80px] lg:bottom-[120px] h-[100vh] overflow-hidden"
            >
                <Image
                    src="/images/industries-we-serve-section-background.webp"
                    alt="Industries we serve background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0)_32%,rgba(0,0,0,0)_72%,#000_100%)]" />

                <div className="relative z-10 h-full flex flex-col justify-center py-[80px] lg:py-0">
                    <div
                        ref={containerRef}
                        className="max-w-7xl mx-auto px-4 md:px-8 md:pt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-1 uppercase">
                            <span className="text-n2 text-p3 tracking-p font-normal">[</span>
                            <span className="text-n2 text-p4 tracking-p font-normal">
                                INDUSTRIES WE SERVE
                            </span>
                            <span className="text-n2 text-p3 tracking-p font-normal">]</span>
                        </div>

                        <h3 className="mt-2 text-h4 md:text-h3 tracking-h3 font-bold text-white">
                            Providing A vast Array of Defense
                            Firearms and Ammunitions
                        </h3>
                    </div>

                    <div className="mt-4 mb-0 md:mt-12 md:mb-48">
                        <div className="w-full">
                            <div
                                ref={railRef}
                                className="w-screen overflow-x-clip"
                                style={{ marginLeft: "calc(50% - 50vw)" }}
                            >
                                <div
                                    ref={trackRef}
                                    className="flex gap-6 will-change-transform"
                                >
                                    {cards.map((c) => (
                                        <div
                                            key={c.title}
                                            className="flex-none rounded-2xl border border-w5 bg-w3 backdrop-blur-[20px] p-10 min-w-[280px] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px]"
                                        >
                                            <div className="inline-flex items-center rounded-lg bg-w5 px-3 py-[6px]">
                                                <span className="text-p5 tracking-p font-normal text-n2 uppercase">
                                                    {c.badge}
                                                </span>
                                            </div>

                                            <h5 className="mt-6 text-h5 tracking-h5 font-bold text-white">
                                                {c.title}
                                            </h5>

                                            <p className="mt-2 text-p4 tracking-p font-normal text-n2 max-w-[28ch]">
                                                {c.text}
                                            </p>

                                            <div className="mt-[80px] flex justify-end">
                                                <Image
                                                    src={c.icon}
                                                    alt={`${c.title} icon`}
                                                    width={60}
                                                    height={60}
                                                    sizes="60px"
                                                    className="w-[60px] h-[60px]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="mt-4 text-center text-p5 tracking-p font-normal text-n4 md:hidden">
                                Swipe to explore industries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
