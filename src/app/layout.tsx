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
  title: "Marshall-Defense | Defense Solutions",
  description: "Leading B2B defense solutions provider for military, law enforcement, and government agencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-geist bg-black text-white antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}