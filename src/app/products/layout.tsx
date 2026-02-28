import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Browse Marshall Defense's full catalog of firearms, ammunition, defense apparel, tactical supplies, and more. B2B ordering available for military, law enforcement, and government agencies.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}