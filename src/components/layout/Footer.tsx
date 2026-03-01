import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Energetics", href: "/energetics" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Sporting & Hunting", href: "/products?category=Sporting and Hunting" },
  { label: "Ballistic Apparel", href: "/products?category=Ballistic Apparel" },
  { label: "Ammunitions", href: "/products?category=Ammunition" },
  { label: "Military", href: "/products?category=Military" },
  { label: "Accessories", href: "/products?category=Accessories" },
  { label: "Components", href: "/products?category=Components" },
];

export default function Footer() {
  return (
      <footer className="border-t border-n9 bg-black">
        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-[120px] pb-20">
          {/* ✅ 2-column layout: 35% / 65% */}
          <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-32 md:gap-32">
            {/* 35%: Logo + text only */}
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                    src="/images/logo/marshall-defense-logo.webp"
                    alt="Marshall Defense"
                    width={184}
                    height={56}
                    className="h-14 w-auto"
                />
              </Link>

              <p className="mt-6 text-p4 tracking-p font-normal text-n2 max-w-sm">
                Providing the highest quality ammunition and firearms worldwide. Remember to secure your
                ammunition and firearms at all times.
              </p>
            </div>

            {/* 65%: 2 rows (top: 3 columns, bottom: ITAR logo) */}
            <div className="pt-3">
              {/* Top row: 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.4fr] gap-10">
                {/* Sitemap */}
                <div>
                  <h5 className="text-p4 tracking-p font-normal text-n4">Sitemap</h5>
                  <ul className="mt-6 flex flex-col gap-3">
                    {sitemap.map((l) => (
                        <li key={l.href}>
                          <Link
                              href={l.href}
                              className="text-p4 tracking-p font-normal text-white hover:opacity-80"
                          >
                            {l.label}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h5 className="text-p4 tracking-p font-normal text-n4">Categories</h5>
                  <ul className="mt-6 flex flex-col gap-3">
                    {categories.map((c) => (
                        <li key={c.label}>
                          <Link
                              href={c.href}
                              className="text-p4 tracking-p font-normal text-white hover:opacity-80"
                          >
                            {c.label}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h5 className="text-p4 tracking-p font-normal text-n4">Contact Info</h5>
                  <ul className="mt-6 flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-p4 tracking-p font-normal text-white">
                      <Phone size={18} className="text-white/80" />
                      <a href="tel:+19783822379" className="hover:opacity-80">+1 (978) 382-2379</a>
                    </li>

                    <li className="flex items-center gap-3 text-p4 tracking-p font-normal text-white">
                      <MessageCircle size={18} className="text-white/80" />
                      <a href="https://wa.me/19788522850" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">+1 (978) 852-2850</a>
                    </li>

                    <li className="flex items-center gap-3 text-p4 tracking-p font-normal text-white">
                      <Mail size={18} className="text-white/80" />
                      <a className="hover:opacity-80" href="mailto:info@marshall-defense.com">
                        info@marshall-defense.com
                      </a>
                    </li>

                    <li className="flex items-start gap-3 text-p4 tracking-p font-normal text-white">
                      <MapPin size={18} className="text-white/80 mt-1" />
                      <a href="https://maps.app.goo.gl/vCqATMnznSp3mwjM7" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        Broken Arrow, Oklahoma,
                        <br />
                        74014, USA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom row: ITAR logo (gap 60px from items) */}
              <div className="mt-[60px]">
                <Image
                    src="/images/itar-regist.png"
                    alt="ITAR Registered"
                    width={240}
                    height={64}
                    sizes="240px"
                    className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-n9">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-p5 tracking-p font-normal text-n4">
              All rights reserved © Marshall Enterprises, LLC. 2026
            </p>

            <div className="flex items-center">
              <a href="#" className="text-p4 tracking-p font-normal text-white hover:opacity-80">
                Twitter(x)
              </a>
              <span className="mx-4 h-4 w-px bg-n9" />
              <a href="#" className="text-p4 tracking-p font-normal text-white hover:opacity-80">
                Instagram
              </a>
              <span className="mx-4 h-4 w-px bg-n9" />
              <a href="#" className="text-p4 tracking-p font-normal text-white hover:opacity-80">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}