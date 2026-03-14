// =============================================================================
// EMERALD EYES MIAMI — Private Party Yacht Detail Page
// =============================================================================
// /experiences/private-party-yacht-miami
// Server component using shared ExperienceDetailPage layout.
// =============================================================================

import type { Metadata } from "next";
import ExperienceDetailPage from "@/components/experiences/ExperienceDetailPage";
import type { ExperienceDetailData } from "@/components/experiences/ExperienceDetailPage";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Private Party Yacht Miami | Emerald Eyes Miami",
  description:
    "Your boat. Your rules. Your playlist. Birthdays, celebrations, and private yacht parties in Miami. Full sound system, bottle service, and a crew that sets the vibe. From $3,500.",
  keywords: ["private party yacht Miami", "birthday yacht rental", "party boat Miami", "private boat charter"],
  alternates: {
    canonical: "/experiences/private-party-yacht-miami",
  },
  openGraph: {
    title: "Private Party Yacht Miami | Emerald Eyes Miami",
    description:
      "Throw the party of the year on a private yacht. DJ, bottle service, and Miami's skyline as your backdrop.",
    url: "/experiences/private-party-yacht-miami",
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Private Party Yacht Miami",
  tagline: "Your boat. Your rules. Your playlist.",
  heroGradient: "from-purple-600 via-pink-500 to-rose-400",
  whatToExpect: [
    "This is your floating nightclub. A private yacht with a full sound system, LED lighting, and space to dance under the stars. Bring your group, your playlist, and your energy — we handle the rest.",
    "Whether it's a birthday blowout, a milestone celebration, or just a Saturday that deserves something special — this is how Miami does it on the water.",
    "Add bottle service, a DJ, a sushi chef, or hookah. Your party, your way. Our crew keeps everything flowing so you can focus on the moment.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Full Bluetooth sound system",
    "Ice, coolers, and glassware",
    "Fuel and docking fees",
    "4-8 hours on the water",
    "Party lighting setup",
    "Complimentary bottled water",
    "Space for 8-25+ guests",
  ],
  pricing: "From $3,500",
  pricingNote:
    "Final price depends on vessel, group size, duration, and add-ons. We'll put together a custom package.",
  bestFor: "Birthdays, groups, celebrations, milestone events",
  itinerary: [
    {
      time: "Board",
      description:
        "Arrive at the marina. Music starts, drinks are poured, energy is up.",
    },
    {
      time: "Cruise",
      description:
        "Hit the open water. Biscayne Bay, Star Island, and the Miami skyline.",
    },
    {
      time: "Party",
      description:
        "Anchor at a scenic spot. Dance, swim, celebrate. This is your time.",
    },
    {
      time: "Golden Hour",
      description:
        "Catch the sunset from the water. The best backdrop for group photos.",
    },
    {
      time: "Return",
      description:
        "Cruise back as the city lights up. Arrive at the marina on a high.",
    },
  ],
  ctaText: "Plan Your Private Party",
  bookingHref: "/book?occasion=birthday",
  slug: "private-party-yacht-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function PrivatePartyPage() {
  return <ExperienceDetailPage data={data} />;
}
