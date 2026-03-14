// =============================================================================
// EMERALD EYES MIAMI — About Page (/about)
// =============================================================================
// Server component. Brand story, values, location, team placeholder, and CTA.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "About | Emerald Eyes Miami",
  description:
    "Founded in North Miami. Premium yacht experiences curated from the Straits of Florida. Luxury without pretension, every detail handled.",
  keywords: [
    "about Emerald Eyes Miami",
    "Miami yacht company",
    "North Miami boat rental",
    "yacht crew Miami",
    "luxury yacht experiences",
  ],
  alternates: {
    canonical: "/about",
    languages: { en: "/about", es: "/es/about" },
  },
  openGraph: {
    title: "About Emerald Eyes Miami",
    description:
      "Built by people who live on the water. Luxury yacht experiences from North Miami, FL.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "About Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Emerald Eyes Miami",
    description:
      "Built by people who live on the water. Luxury yacht experiences from North Miami, FL.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// Values Data
// ---------------------------------------------------------------------------
const VALUES = [
  {
    title: "Luxury Without Pretension",
    description:
      "Premium doesn't mean stuffy. We bring high-end service with a laid-back Miami energy. You'll feel pampered, not judged.",
    icon: "\u2728", // sparkles
  },
  {
    title: "Miami Nightlife Meets Open Water",
    description:
      "The city's best DJs, bottle service, and sunset views — except your venue floats. We blend nightlife energy with ocean freedom.",
    icon: "\uD83C\uDF0A", // wave
  },
  {
    title: "Every Detail, Handled",
    description:
      "From the champagne brand to the photographer's angle — we sweat the details so you can focus on the moment.",
    icon: "\u2714\uFE0F", // check mark
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Emerald Eyes Miami",
  description:
    "Emerald Eyes Miami was founded in North Miami with a simple idea: luxury yacht experiences should feel effortless, not exclusive.",
  publisher: {
    "@type": "LocalBusiness",
    name: "Emerald Eyes Miami",
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Miami",
      addressRegion: "FL",
    },
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <main itemScope itemType="http://schema.org/AboutPage">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[45vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            About Emerald Eyes Miami
          </h1>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-4">
            Our Story
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Emerald Eyes Miami was founded in North Miami with a simple idea:
            luxury yacht experiences should feel effortless, not exclusive. We
            believe every group — whether it&apos;s two people on a sunset date
            or twenty-five celebrating a birthday — deserves a crew that cares,
            a vessel that impresses, and a day they&apos;ll never forget.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            We curate premium charter experiences from the Straits of Florida.
            Biscayne Bay, the Atlantic coastline, Haulover Sandbar, and the
            turquoise waters off Key Biscayne — this is our playground, and we
            know every inch of it.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-10 text-center">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-[--color-navy] rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold] mb-3">
                {value.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-6">
            Our Home Waters
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Based in North Miami, FL. Direct access to Biscayne Bay, the
            Atlantic, and the Gulf Stream. Minutes from South Beach, Brickell,
            Aventura, and Sunny Isles.
          </p>
          <p className="text-white/50 text-sm">
            We offer pickup from South Beach, Brickell, Downtown Miami,
            Aventura, Bal Harbour, and Sunny Isles.
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-6">
            The Team
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Built by people who live on the water. Every member of our crew
            knows Miami&apos;s waterways, understands hospitality, and takes
            pride in making your experience seamless.
          </p>
          {/* Placeholder for founder photo/bio */}
          <div className="inline-block rounded-xl bg-gradient-to-br from-[--color-emerald]/20 to-[--color-gold]/20 border border-white/10 px-10 py-6">
            <p className="text-white/50 text-sm">
              Founder photo and bio coming soon.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-6">
            Ready to experience it?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s chat and build your perfect day on the water.
          </p>
          <Button href="/book" size="lg">
            Plan Your Charter
          </Button>
        </div>
      </Section>
    </main>
  );
}
