// =============================================================================
// EMERALD EYES MIAMI — Reusable Button Component
// =============================================================================
// Variants: primary (emerald fill), secondary (emerald outline), ghost (text-only)
// Supports both button and Next.js Link rendering via href prop.
// =============================================================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// ---------------------------------------------------------------------------
// Style Maps
// ---------------------------------------------------------------------------
const variantStyles: Record<string, string> = {
  primary:
    "bg-[--color-emerald] text-[--color-navy] font-semibold hover:brightness-110",
  secondary:
    "border border-[--color-emerald] text-[--color-emerald] bg-transparent hover:bg-[--color-emerald-dim]",
  ghost: "bg-transparent text-white hover:underline underline-offset-4",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  href,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full transition-all duration-200";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Motion config: subtle scale on hover/tap
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  // If href is provided, render as a Next.js Link
  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      disabled={disabled}
      className={`${classes} ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
