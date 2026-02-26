import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      fontFamily: { geist: string[] };
      letterSpacing: {
        p: string;
        btn2: string;
        h1: string;
        h2: string;
        h3: string;
        btn1: string;
        h4: string;
        h5: string;
        h6: string
      };
      fontSize: {
        p1: (string | { lineHeight: string })[];
        p2: (string | { lineHeight: string })[];
        p3: (string | { lineHeight: string })[];
        p4: (string | { lineHeight: string })[];
        p5: (string | { lineHeight: string })[];
        h1: (string | { lineHeight: string })[];
        h2: (string | { lineHeight: string })[];
        h3: (string | { lineHeight: string })[];
        h4: (string | { lineHeight: string })[];
        h5: (string | { lineHeight: string })[];
        h6: (string | { lineHeight: string })[];
        btn2: (string | { lineHeight: string })[];
        btn1: (string | { lineHeight: string })[]
      };
      colors: {
        n1: string;
        n2: string;
        n3: string;
        n4: string;
        n5: string;
        n6: string;
        n7: string;
        n8: string;
        n9: string;
        n10: string;
        w10: string;
        w3: string;
        w5: string;
        primary: string
      }
    }
  };
  content: string[]
} = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0088FF",

        n1: "#E6E6E6",
        n2: "#CCCCCC",
        n3: "#B3B3B3",
        n4: "#999999",
        n5: "#808080",
        n6: "#666666",
        n7: "#4D4D4D",
        n8: "#333333",
        n9: "#1A1A1A",
        n10: "#0D0D0D",

        // optional helpers (your styleguide)
        w10: "rgba(255,255,255,0.10)",
        w5: "rgba(255,255,255,0.05)",
        w3: "rgba(255,255,255,0.03)",
      },

      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
      },

      // ✅ your styleguide letter-spacing
      letterSpacing: {
        h1: "-0.03em",   // -3%
        h2: "-0.025em",  // -2.5%
        h3: "-0.025em",
        h4: "-0.015em",  // -1.5%
        h5: "-0.01em",   // -1%
        h6: "-0.01em",
        p: "-0.01em",
        btn1: "-0.01em",
        btn2: "0em",
      },

      // ✅ your styleguide type scale
      fontSize: {
        // Headings
        h1: ["72px", { lineHeight: "80px" }],
        h2: ["56px", { lineHeight: "64px" }],
        h3: ["48px", { lineHeight: "56px" }],
        h4: ["32px", { lineHeight: "40px" }],
        h5: ["24px", { lineHeight: "32px" }],
        h6: ["20px", { lineHeight: "28px" }],

        // Paragraph regular / medium (same sizes, weight controlled by class)
        p1: ["32px", { lineHeight: "48px" }],
        p2: ["22px", { lineHeight: "34px" }],
        p3: ["20px", { lineHeight: "32px" }],
        p4: ["18px", { lineHeight: "28px" }],
        p5: ["16px", { lineHeight: "24px" }],

        // Buttons
        btn1: ["20px", { lineHeight: "24px" }],
        btn2: ["18px", { lineHeight: "24px" }],
      },
    },
  },
  plugins: [],
};

export default config;