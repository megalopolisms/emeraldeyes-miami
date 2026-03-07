// =============================================================================
// EMERALD EYES MIAMI — Proposal Yacht Detail Page
// =============================================================================
// /experiences/proposal-yacht-miami
// Server component using shared ExperienceDetailPage layout.
// =============================================================================

import type { Metadata } from "next";
import ExperienceDetailPage from "@/components/experiences/ExperienceDetailPage";
import type { ExperienceDetailData } from "@/components/experiences/ExperienceDetailPage";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Proposal Yacht Miami | Emerald Eyes Miami",
  description:
    "She'll say yes. The ocean guarantees it. Rose petals, hidden photographer, champagne on ice, and a sunset that sets the stage. From $3,000.",
  openGraph: {
    title: "Proposal Yacht Miami | Emerald Eyes Miami",
    description:
      "Plan the perfect proposal on a private yacht in Miami. Rose petals, sunset, champagne, and a hidden photographer.",
  },
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
  return <ExperienceDetailPage data={data} />;
}
