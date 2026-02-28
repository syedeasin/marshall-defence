import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energetics & Munitions",
  description:
    "Certified supply and consulting for military-grade energetics, pyrotechnics, explosive ordnance, and demolition systems. All requests subject to compliance review.",
};

export default function EnergeticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
