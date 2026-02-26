"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Manual proximity snap — briefly holds at each section boundary
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    lenis.on("scroll", () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        const threshold = window.innerHeight * 0.15;
        for (const section of sections) {
          const top = section.getBoundingClientRect().top;
          if (Math.abs(top) < threshold) {
            lenis.scrollTo(section as HTMLElement, {
              offset: 0,
              duration: 0.6,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
            break;
          }
        }
      }, 120);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
