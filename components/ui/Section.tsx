// =============================================================================
// EMERALD EYES MIAMI — Page Section Wrapper
// =============================================================================
// Consistent max-width, padding, and optional dark background for page sections.
// The `id` prop enables scroll-to targeting from nav links.
// =============================================================================

import { type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Section({
  children,
  id,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${dark ? "bg-[--color-navy-light]" : "bg-transparent"}
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
        {children}
      </div>
    </section>
  );
}
