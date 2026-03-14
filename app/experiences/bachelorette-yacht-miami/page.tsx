// =============================================================================
// EMERALD EYES MIAMI — Bachelorette Yacht Detail Page
// =============================================================================
// /experiences/bachelorette-yacht-miami
// Server component using shared ExperienceDetailPage layout.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import ExperienceDetailPage from "@/components/experiences/ExperienceDetailPage";
import type { ExperienceDetailData } from "@/components/experiences/ExperienceDetailPage";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Bachelorette Yacht Miami | Emerald Eyes Miami",
  description:
    "The pregame before forever. DJ, champagne, photo props, and open water. The bachelorette your squad will talk about for years. From $3,500.",
  keywords: [
    "bachelorette yacht Miami",
    "bachelorette party boat Miami",
    "Miami bachelorette charter",
    "boat rental bachelorette",
  ],
  alternates: {
    canonical: "/experiences/bachelorette-yacht-miami",
    languages: {
      en: "/experiences/bachelorette-yacht-miami",
      es: "/es/experiences/bachelorette-yacht-miami",
    },
  },
  openGraph: {
    title: "Bachelorette Yacht Miami | Emerald Eyes Miami",
    description:
      "Throw the ultimate bachelorette party on a private yacht in Miami. DJ, champagne, and ocean vibes.",
    url: "/experiences/bachelorette-yacht-miami",
    type: "website",
    images: [
      {
        url: "/images/bachelorette.jpg",
        width: 784,
        height: 1168,
        alt: "Bachelorette yacht party Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bachelorette Yacht Miami | Emerald Eyes Miami",
    description:
      "Throw the ultimate bachelorette party on a private yacht in Miami.",
    images: ["/images/bachelorette.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Bachelorette Yacht Miami",
  description:
    "DJ, champagne, photo props, and open water. The bachelorette your squad will talk about for years.",
  touristType: "Bride squads, celebration groups, bridal showers",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  offers: {
    "@type": "Offer",
    price: "3500",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://emeraldeyesmiami.com/experiences/bachelorette-yacht-miami",
  },
  image: "https://emeraldeyesmiami.com/images/bachelorette.jpg",
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Bachelorette Yacht Miami",
  tagline: "The pregame before forever.",
  heroGradient: "from-fuchsia-600 via-pink-500 to-amber-400",
  whatToExpect: [
    "This is the bachelorette your group will be talking about for years. A private yacht, a DJ, champagne flowing, and Miami's skyline as your backdrop. It's the ultimate send-off.",
    "Custom decorations, matching props, and a crew that's ready to make the bride feel like royalty. We've hosted hundreds of bride squads — we know exactly how to make it unforgettable.",
    "Swim, dance, take photos, pop bottles, and cruise past the mansions on Star Island. This is your day. We make it easy.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Full Bluetooth sound system",
    "Ice, coolers, and glassware",
    "Fuel and docking fees",
    "4-8 hours on the water",
    "Photo props and decorations",
    "Complimentary bottled water",
    "Space for bridal party groups",
  ],
  pricing: "From $3,500",
  pricingNote:
    "Add a DJ, champagne package, sushi chef, or photographer. We build custom bachelorette packages.",
  bestFor: "Bride squads, celebration groups, bridal showers",
  itinerary: [
    {
      time: "Board",
      description:
        "Arrive at the marina. Decorations are up, music is on, champagne is chilled.",
    },
    {
      time: "Cruise",
      description:
        "Head out on Biscayne Bay. Group photos with the skyline behind you.",
    },
    {
      time: "Party Time",
      description:
        "Anchor up. Dance, swim, play games. This is the bride's moment.",
    },
    {
      time: "Sunset Toast",
      description:
        "Raise a glass as the sun sets over the water. Golden hour photos are mandatory.",
    },
    {
      time: "Return",
      description:
        "Cruise back to the marina with the city lights glowing. Night is just getting started.",
    },
  ],
  ctaText: "Plan Your Bachelorette",
  bookingHref: "/book?occasion=bachelor",
  slug: "bachelorette-yacht-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function BacheloretteYachtPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ExperienceDetailPage data={data} />
    </>
  );
}
