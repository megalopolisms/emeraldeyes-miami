// =============================================================================
// EMERALD EYES MIAMI — Experience Card Component
// =============================================================================
// Renders a single experience as a clickable card with gradient placeholder,
// title, tagline, price, bestFor, and duration. Used on /experiences hub page.
// =============================================================================

import Link from "next/link";
import type { Experience } from "@/lib/types";

// ---------------------------------------------------------------------------
// Gradient map — occasion-based placeholder colors
// ---------------------------------------------------------------------------
const OCCASION_GRADIENTS: Record<string, string> = {
  sunset: "from-amber-600 via-orange-500 to-rose-500",
  birthday: "from-purple-600 via-pink-500 to-rose-400",
  corporate: "from-slate-700 via-blue-800 to-indigo-900",
  bachelor: "from-fuchsia-600 via-pink-500 to-amber-400",
  proposal: "from-rose-500 via-pink-400 to-amber-300",
  vibes: "from-cyan-500 via-teal-400 to-emerald-400",
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ExperienceCard({
  experience,
  className = "",
}: ExperienceCardProps) {
  const gradient =
    OCCASION_GRADIENTS[experience.occasion] ||
    "from-emerald-600 via-teal-500 to-cyan-400";

  return (
    <Link
      href={`/experiences/${experience.slug}`}
      className={`
        group block overflow-hidden rounded-xl bg-[--color-navy-light]
        transition-transform duration-300 hover:scale-[1.02]
        ${className}
      `}
    >
      {/* Gradient image placeholder */}
      <div
        className={`
          h-48 bg-gradient-to-br ${gradient}
          flex items-end p-4
          transition-opacity duration-300 group-hover:opacity-90
        `}
      >
        <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
          {experience.duration}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 space-y-3">
        <h3 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold]">
          {experience.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {experience.tagline}
        </p>
        <p className="text-[--color-emerald] font-semibold text-lg">
          From ${experience.startPrice.toLocaleString()}
        </p>
        <p className="text-white/50 text-xs">Best for: {experience.bestFor}</p>
      </div>
    </Link>
  );
}
