// =============================================================================
// EMERALD EYES MIAMI — Site Footer
// =============================================================================
// 4-column grid with brand info, quick links, experiences, and contact.
// Responsive: 1-col mobile, 2-col tablet, 4-col desktop.
// =============================================================================

import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Link Data
// ---------------------------------------------------------------------------
const quickLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/fleet", label: "Fleet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const experienceLinks = [
  { href: "/experiences/sunset-cruise-miami", label: "Sunset Cruise" },
  {
    href: "/experiences/bachelorette-yacht-miami",
    label: "Bachelorette Party",
  },
  { href: "/experiences/private-party-yacht-miami", label: "Private Party" },
  { href: "/experiences/proposal-yacht-miami", label: "Proposal" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1520] border-t border-white/5">
      {/* ----------------------------------------------------------------- */}
      {/* Main Grid                                                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand */}
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider text-[--color-gold] uppercase">
            Emerald Eyes Miami
          </h3>
          <p className="mt-2 text-sm text-white/60">{BUSINESS.tagline}</p>
          <p className="mt-1 text-sm text-white/40">{BUSINESS.location}</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-[--color-emerald]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Experiences */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Experiences
          </h4>
          <ul className="space-y-2">
            {experienceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-[--color-emerald]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact / Social */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Connect
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                href="https://instagram.com/EmeraldEyesMiami"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[--color-emerald]"
              >
                Instagram {BUSINESS.instagram}
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@EmeraldEyesMiami"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[--color-emerald]"
              >
                TikTok {BUSINESS.tiktok}
              </a>
            </li>
            {BUSINESS.email && (
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors duration-200 hover:text-[--color-emerald]"
                >
                  {BUSINESS.email}
                </a>
              </li>
            )}
            {BUSINESS.phone && (
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="transition-colors duration-200 hover:text-[--color-emerald]"
                >
                  {BUSINESS.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Gold Divider                                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-[--color-gold]/30" />
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Bottom Bar                                                        */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-xs text-white/30">
          &copy; {year} {BUSINESS.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-xs text-white/30 transition-colors duration-200 hover:text-[--color-emerald]"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-white/30 transition-colors duration-200 hover:text-[--color-emerald]"
          >
            Terms
          </Link>
          <Link
            href="/cancellation-policy"
            className="text-xs text-white/30 transition-colors duration-200 hover:text-[--color-emerald]"
          >
            Cancellation Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
