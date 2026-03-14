// =============================================================================
// EMERALD EYES MIAMI — Homepage
// =============================================================================
// Split-screen hero (logo + chat) fills the viewport, followed by
// below-fold content sections (Experiences, Why Us, How It Works).
// This is a server component — no "use client" needed.
// =============================================================================

import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Emerald Eyes Miami | Luxury Yacht Rental in North Miami",
  description:
    "Book a luxury yacht charter in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate outings on Biscayne Bay. Chat with us to build your perfect day on the water.",
  keywords: [
    "yacht rental Miami",
    "North Miami yacht charter",
    "sunset cruise Miami",
    "private yacht party",
    "bachelorette yacht Miami",
    "boat rental Haulover",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      pt: "/pt",
      de: "/de",
      fr: "/fr",
      zh: "/zh",
      ja: "/ja",
    },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Luxury Yacht Rental in North Miami",
    description:
      "Book a luxury yacht charter in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate outings on Biscayne Bay.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — Luxury yacht rental in North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Luxury Yacht Rental in North Miami",
    description:
      "Book a luxury yacht charter in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate outings on Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function HomePage() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      {/* Full-viewport split-screen: logo left, chat right */}
      <HeroSplit />

      {/* Scrollable content below the hero */}
      <BelowFold />
    </main>
  );
}
