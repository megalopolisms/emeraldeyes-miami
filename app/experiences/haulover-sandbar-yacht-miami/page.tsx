// =============================================================================
// EMERALD EYES MIAMI — Haulover Sandbar Yacht Detail Page
// =============================================================================
// /experiences/haulover-sandbar-yacht-miami
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
  title: "Haulover Sandbar Yacht Miami | Emerald Eyes Miami",
  description:
    "The island party everyone's talking about. Floating mats, music, cold drinks, and the quintessential Miami sandbar experience. From $2,500.",
  keywords: [
    "Haulover Sandbar yacht",
    "Miami sandbar boat rental",
    "yacht rental Haulover",
    "sandbar party Miami",
  ],
  alternates: {
    canonical: "/experiences/haulover-sandbar-yacht-miami",
  },
  openGraph: {
    title: "Haulover Sandbar Yacht Miami | Emerald Eyes Miami",
    description:
      "Anchor up at Haulover Sandbar with floating mats, music, and cold drinks. The ultimate Miami water day.",
    url: "/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    images: [
      {
        url: "/images/sandbar.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar yacht day Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar Yacht Miami | Emerald Eyes Miami",
    description:
      "Anchor up at Haulover Sandbar with floating mats, music, and cold drinks. The ultimate Miami water day.",
    images: ["/images/sandbar.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Haulover Sandbar Yacht Miami",
  description:
    "Anchor up at Haulover Sandbar with floating mats, music, and cold drinks. The quintessential Miami water experience.",
  touristType: "Friends, influencers, weekend warriors, groups",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://emeraldeyesmiami.com/experiences/haulover-sandbar-yacht-miami",
  },
  image: "https://emeraldeyesmiami.com/images/sandbar.jpg",
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Haulover Sandbar Yacht Miami",
  tagline: "The island party everyone's talking about.",
  heroGradient: "from-cyan-500 via-teal-400 to-emerald-400",
  whatToExpect: [
    "Haulover Sandbar is Miami's ultimate water playground. Crystal-clear shallow water, surrounded by boats, music, and the best energy in the city. And you're pulling up on a private yacht.",
    "We anchor up, deploy the floating mats, and turn the speakers on. Jump in the water, wade up to the sandbar, grab a drink, and vibe. This is what weekends are made for.",
    "Whether it's a group of friends, a birthday crew, or just a perfect Saturday — the sandbar is where Miami goes to let loose. You just get there in style.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Full Bluetooth sound system",
    "Ice, coolers, and glassware",
    "Fuel and docking fees",
    "4-8 hours on the water",
    "Floating mats and water toys",
    "Complimentary bottled water",
    "Sandbar anchoring expertise",
  ],
  pricing: "From $2,500",
  pricingNote:
    "Bring your own food and drinks, or add our catering packages. Jet ski add-on available.",
  bestFor: "Friends, influencers, weekend warriors, groups",
  itinerary: [
    {
      time: "Board",
      description:
        "Meet at the marina. Music on, coolers loaded, energy building.",
    },
    {
      time: "Cruise Out",
      description: "Head north through Biscayne Bay toward Haulover Inlet.",
    },
    {
      time: "Sandbar",
      description:
        "Anchor at the sandbar. Floating mats out. Swim, wade, socialize, repeat.",
    },
    {
      time: "Afternoon",
      description:
        "Music, drinks, and Miami's best water party. Take it all in.",
    },
    {
      time: "Return",
      description:
        "Cruise back to the marina as the afternoon winds down. Sun-kissed and satisfied.",
    },
  ],
  ctaText: "Plan Your Sandbar Day",
  bookingHref: "/book?occasion=vibes",
  slug: "haulover-sandbar-yacht-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function HauloverSandbarPage() {
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
