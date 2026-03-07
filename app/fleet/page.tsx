// =============================================================================
// EMERALD EYES MIAMI — Fleet Page (/fleet)
// =============================================================================
// Server component. Shows vessel categories (not specific boats — fleet not
// confirmed yet). Honest about working with a curated network.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Our Fleet | Emerald Eyes Miami",
  description:
    "Intimate yachts, party vessels, and luxury charters available through our trusted North Miami charter network. Tell us your group size and style — we'll match you.",
  alternates: {
    canonical: "/fleet",
  },
  openGraph: {
    title: "Yacht Fleet | Emerald Eyes Miami",
    description:
      "From intimate 2-person cruises to 25+ guest events. We match you with the perfect vessel from our curated Miami charter network.",
    url: "/fleet",
  },
};

// ---------------------------------------------------------------------------
// Vessel Categories
// ---------------------------------------------------------------------------
const VESSEL_CATEGORIES = [
  {
    name: "Intimate Yachts",
    guests: "2-8 guests",
    idealFor: "Sunset cruises, proposals, date nights, small celebrations",
    gradient: "from-amber-600 via-orange-500 to-rose-500",
    description:
      "Perfect for couples and small groups who want privacy, elegance, and the open water all to themselves.",
  },
  {
    name: "Party Vessels",
    guests: "9-20 guests",
    idealFor: "Birthdays, bachelorettes, friend groups, sandbar trips",
    gradient: "from-purple-600 via-pink-500 to-rose-400",
    description:
      "Full sound systems, space to dance, and room for your whole crew. Built for energy and good times.",
  },
  {
    name: "Luxury Charters",
    guests: "20+ guests",
    idealFor: "Corporate events, large celebrations, brand activations",
    gradient: "from-slate-700 via-blue-800 to-indigo-900",
    description:
      "Premium vessels for when you need to impress. Catering-ready, professionally crewed, and unforgettable.",
  },
];

const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Emerald Eyes Miami Fleet",
  "description": "Our curated network of yachts in North Miami.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": VESSEL_CATEGORIES.map((cat, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": cat.name,
      "description": cat.description
    }))
  }
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function FleetPage() {
  return (
    <main>
      <Script
        id="fleet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }}
      />
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[45vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Our Fleet
          </h1>
          <p className="text-xl text-white/70">
            Available through our trusted North Miami charter network.
          </p>
        </div>
      </section>

      {/* Honest Note */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-lg leading-relaxed">
            We work with a curated network of vessels. Tell us your group size,
            style, and budget — we&apos;ll match you with the perfect boat.
            Every vessel comes with a licensed USCG captain and professional
            crew.
          </p>
        </div>
      </Section>

      {/* Vessel Category Cards */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VESSEL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="rounded-xl overflow-hidden bg-[--color-navy] border border-white/10"
            >
              {/* Gradient placeholder */}
              <div
                className={`h-52 bg-gradient-to-br ${category.gradient} flex items-end p-5`}
              >
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                  {category.guests}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-4">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold]">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {category.description}
                </p>
                <p className="text-white/50 text-xs">
                  Ideal for: {category.idealFor}
                </p>
                <Button href="/book" variant="secondary" size="sm">
                  Inquire
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-4">
            Tell us what you need
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Group size, occasion, and budget. We&apos;ll find the right vessel.
          </p>
          <Button href="/book" size="lg">
            Start Planning
          </Button>
        </div>
      </Section>
    </main>
  );
}
