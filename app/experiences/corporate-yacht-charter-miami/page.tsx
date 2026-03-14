// =============================================================================
// EMERALD EYES MIAMI — Corporate Yacht Charter Detail Page
// =============================================================================
// /experiences/corporate-yacht-charter-miami
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
  title: "Corporate Yacht Charter Miami | Emerald Eyes Miami",
  description:
    "Impress without saying a word. Executive hosting, team events, and client entertainment on a private yacht in Miami. From $4,000.",
  keywords: [
    "corporate yacht charter Miami",
    "Miami corporate boat rental",
    "executive yacht charter",
    "team building boat rental",
  ],
  alternates: {
    canonical: "/experiences/corporate-yacht-charter-miami",
    languages: {
      en: "/experiences/corporate-yacht-charter-miami",
      es: "/es/experiences/corporate-yacht-charter-miami",
    },
  },
  openGraph: {
    title: "Corporate Yacht Charter Miami | Emerald Eyes Miami",
    description:
      "The boardroom with a better view. Host clients, teams, or executives on a private yacht charter in Miami.",
    url: "/experiences/corporate-yacht-charter-miami",
    type: "website",
    images: [
      {
        url: "/images/corporate.jpg",
        width: 784,
        height: 1168,
        alt: "Corporate yacht charter Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Yacht Charter Miami | Emerald Eyes Miami",
    description:
      "The boardroom with a better view. Host clients, teams, or executives on a private yacht in Miami.",
    images: ["/images/corporate.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Corporate Yacht Charter Miami",
  description:
    "Executive hosting, team events, and client entertainment on a private yacht in Miami.",
  touristType: "Teams, clients, executive events, product launches",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  offers: {
    "@type": "Offer",
    price: "4000",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://emeraldeyesmiami.com/experiences/corporate-yacht-charter-miami",
  },
  image: "https://emeraldeyesmiami.com/images/corporate.jpg",
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Corporate Yacht Charter Miami",
  tagline: "Impress without saying a word.",
  heroGradient: "from-slate-700 via-blue-800 to-indigo-900",
  whatToExpect: [
    "Forget the conference room. Your next team offsite, client dinner, or executive retreat happens on the water. A private yacht with catering, A/V setup, and a professional crew that makes you look good.",
    "Whether you're closing a deal, celebrating a quarter, or hosting international clients — nothing says 'we're serious' like a yacht charter on Biscayne Bay.",
    "We coordinate everything: catering, bar service, presentation equipment, transportation, and timing. You show up and lead. We handle the rest.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Bluetooth sound system",
    "Ice, coolers, and glassware",
    "Fuel and docking fees",
    "4-8 hours on the water",
    "Professional crew in uniform",
    "Complimentary bottled water",
    "Flexible layout for meetings or mingling",
  ],
  pricing: "From $4,000",
  pricingNote:
    "Includes vessel and crew. Catering, A/V, and transportation available as add-ons. Custom packages for recurring events.",
  bestFor: "Teams, clients, executive events, product launches, retreats",
  itinerary: [
    {
      time: "Board",
      description:
        "Guests arrive at the marina. Crew welcomes with refreshments.",
    },
    {
      time: "Welcome",
      description:
        "Host gives remarks as the yacht departs. Scenic cruise begins.",
    },
    {
      time: "Main Event",
      description:
        "Meeting, presentation, or networking over catered food and drinks on the water.",
    },
    {
      time: "Scenic Break",
      description:
        "Anchor near Star Island. Casual mingling, photos, and ocean air.",
    },
    {
      time: "Return",
      description:
        "Cruise back as the sun sets. Transportation arranged for all guests.",
    },
  ],
  ctaText: "Plan Your Corporate Charter",
  bookingHref: "/book?occasion=corporate",
  slug: "corporate-yacht-charter-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function CorporateCharterPage() {
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
