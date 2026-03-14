// =============================================================================
// EMERALD EYES MIAMI — Proposal Yacht Detail Page
// =============================================================================
// /experiences/proposal-yacht-miami
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
  title: "Proposal Yacht Miami | Emerald Eyes Miami",
  description:
    "She'll say yes. The ocean guarantees it. Rose petals, hidden photographer, champagne on ice, and a sunset that sets the stage. From $3,000.",
  keywords: [
    "proposal yacht Miami",
    "engagement boat rental Miami",
    "romantic yacht proposal",
    "Miami proposal packages",
  ],
  alternates: {
    canonical: "/experiences/proposal-yacht-miami",
  },
  openGraph: {
    title: "Proposal Yacht Miami | Emerald Eyes Miami",
    description:
      "The perfect proposal on a private yacht. Rose petals, champagne, and Miami's skyline at sunset.",
    url: "/experiences/proposal-yacht-miami",
    type: "website",
    images: [
      {
        url: "/images/proposal.jpg",
        width: 784,
        height: 1168,
        alt: "Proposal on a yacht at sunset Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposal Yacht Miami | Emerald Eyes Miami",
    description:
      "The perfect proposal on a private yacht. Rose petals, champagne, and Miami's skyline at sunset.",
    images: ["/images/proposal.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Proposal Yacht Miami",
  description:
    "Rose petals, hidden photographer, champagne on ice, and a sunset that sets the stage. We've thought of everything.",
  touristType: "Couples, proposals, anniversaries, romantic celebrations",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://emeraldeyesmiami.com/experiences/proposal-yacht-miami",
  },
  image: "https://emeraldeyesmiami.com/images/proposal.jpg",
};

// ---------------------------------------------------------------------------
// Page Data
// ---------------------------------------------------------------------------
const data: ExperienceDetailData = {
  title: "Proposal Yacht Miami",
  tagline: "She'll say yes. The ocean guarantees it.",
  heroGradient: "from-rose-500 via-pink-400 to-amber-300",
  whatToExpect: [
    "We've thought of everything so you don't have to. Rose petals on the deck, champagne on ice, and a sunset that paints the sky in shades of gold and rose. All you need to do is ask the question.",
    "Our crew coordinates discreetly. A hidden photographer captures every moment — the nervous smile, the ring, the reaction, the embrace. These are the photos you'll frame.",
    "After the moment, celebrate on the water. Cruise under the stars, toast to your future, and let the ocean carry you into the next chapter.",
  ],
  whatsIncluded: [
    "Licensed USCG captain and crew",
    "Rose petal setup on deck",
    "Champagne and glassware",
    "Bluetooth sound system",
    "Fuel and docking fees",
    "2-4 hours on the water",
    "Complimentary bottled water",
    "Crew trained for discreet coordination",
  ],
  pricing: "From $3,000",
  pricingNote:
    "Hidden photographer add-on from $150. Custom packages with dinner, violinist, or fireworks available.",
  bestFor: "Couples, proposals, anniversaries, romantic celebrations",
  itinerary: [
    {
      time: "Preparation",
      description:
        "Crew sets up rose petals, champagne, and lighting before you arrive.",
    },
    {
      time: "Board",
      description:
        "Board the yacht together. Your partner doesn't suspect a thing.",
    },
    {
      time: "Cruise",
      description:
        "Scenic cruise through Biscayne Bay. Music plays, the mood is perfect.",
    },
    {
      time: "The Moment",
      description:
        "As the sun sets, the crew creates your moment. Photographer captures everything.",
    },
    {
      time: "Celebrate",
      description:
        "Toast with champagne, cruise under the stars, and soak in the afterglow.",
    },
  ],
  ctaText: "Plan Your Proposal",
  bookingHref: "/book?occasion=proposal",
  slug: "proposal-yacht-miami",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function ProposalYachtPage() {
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
