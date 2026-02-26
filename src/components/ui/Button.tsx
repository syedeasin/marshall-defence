import React from "react";
import Link from "next/link";

type ButtonVariant = "solid" | "glass" | "text";
type ButtonSize = "lg" | "sm";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

export default function Button({
                                 variant = "solid",
                                 size = "lg",
                                 href,
                                 onClick,
                                 children,
                                 className = "",
                                 icon,
                                 iconPosition = "right",
                                 type = "button",
                               }: ButtonProps) {
  // ✅ 100% rounded for all buttons
  const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer gap-[6px] rounded-full";

  // ✅ sizes updated to match your styleguide for glass + keep other sizes consistent
  // Glass spec: py-3 px-6 and text-btn2 tracking-btn2
  const sizes: Record<ButtonSize, string> = {
    lg: "py-3 px-6 text-btn2 tracking-btn2 leading-6",
    sm: "py-2 px-4 text-btn2 tracking-btn2 leading-6",
  };

  // ✅ glass updated exactly per your requirement
  const variants: Record<ButtonVariant, string> = {
    solid: "bg-white text-black hover:bg-n1",
    glass: `
      bg-w3
      backdrop-blur-[20px]
      border border-white/10
      text-white
      hover:bg-white/5
    `,
    text: "bg-transparent text-white underline underline-offset-4 hover:text-n3",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
      <>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </>
  );

  if (href) {
    return (
        <Link href={href} className={cls} onClick={onClick}>
          {content}
        </Link>
    );
  }

  return (
      <button type={type} onClick={onClick} className={cls}>
        {content}
      </button>
  );
}