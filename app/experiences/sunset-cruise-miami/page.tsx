// =============================================================================
// EMERALD EYES MIAMI — Sunset Cruise Detail Page
// =============================================================================
// /experiences/sunset-cruise-miami
// Server component using shared ExperienceDetailPage layout.
// =============================================================================

import type { Metadata } from "next";
import ExperienceDetailPage from "@/components/experiences/ExperienceDetailPage";
import type { ExperienceDetailData } from "@/components/experiences/ExperienceDetailPage";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Sunset Cruise Miami | Emerald Eyes Miami",
  description:
    "Watch Miami's skyline glow as the sun dips below the horizon. Intimate groups, champagne, and the kind of evening you don't forget. From $2,500.",
  openGraph: {
    title: "Sunset Cruise Miami | Emerald Eyes Miami",
    description:
      "Golden hour on the water. Champagne, ocean breezes, and Miami's skyline at sunset. Book your private sunset cruise.",
  },
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Sunset Cruise Miami",
  tagline: "Golden hour on the water. The evening you won't forget.",
  heroGradient: "from-amber-600 via-orange-500 to-rose-500",
  whatToExpect: [
    "Step aboard as the late afternoon sun casts golden light over Biscayne Bay. Your captain navigates past Star Island and the Miami skyline while you settle in with champagne and your favorite playlist.",
    "As the sun dips below the horizon, the sky ignites in shades of amber and rose. This is the magic hour — the kind of moment that makes Miami unforgettable.",
    "Whether it's a date night, an anniversary, or just because — this cruise is about slowing down and soaking it all in.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Bluetooth sound system",
    "Ice, coolers, and glassware",
    "Fuel and docking fees",
    "2-4 hours on the water",
    "Complimentary bottled water",
  ],
  pricing: "From $2,500",
  pricingNote:
    "Price varies by vessel size, duration, and add-ons. We'll build a custom quote for you.",
  bestFor: "Couples, dates, small celebrations, anniversaries",
  itinerary: [
    {
      time: "Board",
      description:
        "Arrive at the marina, meet your captain and crew. Settle in.",
    },
    {
      time: "Cruise",
      description:
        "Cruise through Biscayne Bay past Star Island and the Miami skyline.",
    },
    {
      time: "Golden Hour",
      description:
        "Anchor or drift as the sun sets. Champagne, photos, and the best light of the day.",
    },
    {
      time: "Return",
      description:
        "Cruise back under the first stars. Arrive at the marina relaxed and glowing.",
    },
  ],
  ctaText: "Plan Your Sunset Cruise",
  bookingHref: "/book?occasion=sunset",
  slug: "sunset-cruise-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function SunsetCruisePage() {
  return <ExperienceDetailPage data={data} />;
}
