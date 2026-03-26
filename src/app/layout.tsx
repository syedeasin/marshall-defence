import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "@/styles/globals.css";

const GeistSans = localFont({
  src: [
    { path: "./fonts/Geist-Regular.ttf",  weight: "400", style: "normal" },
    { path: "./fonts/Geist-Medium.ttf",   weight: "500", style: "normal" },
    { path: "./fonts/Geist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Geist-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marshall-defense.com"),
  title: {
    default: "Marshall Defense | Global Defense Equipment Supplier",
    template: "%s | Marshall Defense",
  },
  description:
    "Marshall Defense is a trusted supplier of firearms, ammunition, defense apparel, and tactical equipment for military, law enforcement, and government agencies worldwide.",
  keywords: [
    "defense supplier",
    "military equipment",
    "defense",
    "firearms supplier",
    "tactical equipment",
    "ITAR compliant",
    "law enforcement supply",
    "ammunition supplier",
  ],
  openGraph: {
    type: "website",
    siteName: "Marshall Defense",
    title: "Marshall Defense | Global Defense Equipment Supplier",
    description:
      "Trusted supplier of firearms, ammunition, and tactical equipment for military, law enforcement, and government agencies worldwide.",
    images: [{ url: "/images/hero-bg.webp", width: 1200, height: 630, alt: "Marshall Defense" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marshall Defense | Global Defense Equipment Supplier",
    description:
      "Trusted supplier of firearms, ammunition, and tactical equipment for military and law enforcement.",
    images: ["/images/hero-bg.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/me-favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="font-geist bg-black text-white antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
