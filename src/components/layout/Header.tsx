"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Energetics", href: "/energetics" },
    { label: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    // Optional but recommended: prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Header (transparent over hero) */}
            <header className="absolute top-0 left-0 right-0 z-50 py-5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo/marshall-defense-logo.webp"
                            alt="Marshall Defense"
                            width={140}
                            height={40}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-white text-p4 tracking-p font-normal transition-opacity hover:opacity-80"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="glass" size="lg" href="/contact">
                            Request a Quote
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* Mobile Offcanvas (full height/width, slides from left) */}
            <div
                className={`fixed inset-0 z-[60] bg-n10 transform transition-transform duration-300 ease-out md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
                aria-hidden={!open}
            >
                <div className="h-full flex flex-col justify-between px-6 py-6">
                    {/* Top: Logo + Close */}
                    <div className="flex items-center justify-between">
                        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                            <Image
                                src="/images/logo/marshall-defense-logo.webp"
                                alt="Marshall Defense"
                                width={140}
                                height={40}
                                priority
                                className="h-10 w-auto"
                            />
                        </Link>

                        <button onClick={() => setOpen(false)} aria-label="Close menu">
                            <X size={32} className="text-white" />
                        </button>
                    </div>

                    {/* Middle: Vertical Menu */}
                    <nav className="flex-1 items-start pt-10 w-full block">
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    {l.active ? (
                                        <Link
                                            href={l.href}
                                            onClick={() => setOpen(false)}
                                            className="w-full block text-p2 tracking-p2 font-medium uppercase text-white py-3 border-b border-w10 transition-opacity hover:opacity-80"
                                        >
                                            {l.label}
                                        </Link>
                                    ) : (
                                        <span className="w-full block text-p2 tracking-p2 font-medium uppercase text-white py-3 border-b border-w10 opacity-40 cursor-not-allowed">
                                            {l.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bottom: CTA */}
                    <div className="pt-6 opacity-40 cursor-not-allowed pointer-events-none">
                        <Button
                            variant="glass"
                            size="lg"
                            href="/contact"
                            className="w-full"
                        >
                            Request a Quote
                        </Button>
                    </div>
                </div>
            </div>

            {/* Optional overlay click-to-close */}
            {open && (
                <button
                    className="fixed inset-0 z-[55] md:hidden"
                    aria-label="Close menu overlay"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}