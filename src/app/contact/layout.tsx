import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Marshall Defense. Our B2B defense specialists are ready to assist with product inquiries, bulk orders, compliance questions, and partnership opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
