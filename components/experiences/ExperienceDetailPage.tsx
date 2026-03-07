// =============================================================================
// EMERALD EYES MIAMI — Shared Experience Detail Page Layout
// =============================================================================
// Reusable layout for all /experiences/[slug] pages. Accepts structured data
// and renders a consistent hero, sections, itinerary, and CTA pattern.
// This avoids duplicating the same layout code across 6 experience pages.
// =============================================================================

import Script from "next/script";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data shape for each experience detail page
// ---------------------------------------------------------------------------
export interface ExperienceDetailData {
  /** Page title shown in hero */
  title: string;
  /** Subtitle / tagline in hero */
  tagline: string;
  /** Gradient class for the hero background */
  heroGradient: string;
  /** "What to Expect" paragraph(s) */
  whatToExpect: string[];
  /** List of included items */
  whatsIncluded: string[];
  /** Pricing display text (e.g. "From $2,500") */
  pricing: string;
  /** Additional pricing notes */
  pricingNote?: string;
  /** "Best For" text */
  bestFor: string;
  /** Sample itinerary steps */
  itinerary: { time: string; description: string }[];
  /** CTA button text */
  ctaText: string;
  /** Optional booking link, usually with a prefilled occasion */
  bookingHref?: string;
  /** Optional slug for building breadcrumbs (e.g. "bachelorette-yacht-miami") */
  slug?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ExperienceDetailPage({
  data,
}: {
  data: ExperienceDetailData;
}) {
  // Extract base price for schema (e.g. "From $3,500" -> "3500")
  const numericPrice = data.pricing.replace(/[^0-9.]/g, "");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.title} | Emerald Eyes Miami`,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Miami",
        "addressRegion": "FL"
      }
    },
    "description": data.tagline,
    "offers": {
      "@type": "Offer",
      "price": numericPrice || "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2027-12-31"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BUSINESS.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experiences",
        "item": `${BUSINESS.siteUrl}/experiences`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": data.slug ? `${BUSINESS.siteUrl}/experiences/${data.slug}` : undefined
      }
    ]
  };

  return (
    <main>
      <Script
        id="experience-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="experience-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ----------------------------------------------------------------- */}
      {/* Hero Section */}
      {/* ----------------------------------------------------------------- */}
      <section
        className={`
          relative bg-gradient-to-br ${data.heroGradient}
          flex items-center justify-center min-h-[50vh] px-6 py-32
        `}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-white/80">{data.tagline}</p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* What to Expect */}
      {/* ----------------------------------------------------------------- */}
      <Section>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-8">
          What to Expect
        </h2>
        <div className="space-y-4 max-w-3xl">
          {data.whatToExpect.map((paragraph, i) => (
            <p key={i} className="text-white/80 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* What's Included */}
      {/* ----------------------------------------------------------------- */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-8">
          What&apos;s Included
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {data.whatsIncluded.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-white/80 text-lg"
            >
              <span className="text-[--color-emerald] mt-1 shrink-0">
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* Pricing */}
      {/* ----------------------------------------------------------------- */}
      <Section>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-4">
          Pricing
        </h2>
        <p className="text-[--color-emerald] text-4xl font-bold mb-4">
          {data.pricing}
        </p>
        {data.pricingNote && (
          <p className="text-white/60 text-lg">{data.pricingNote}</p>
        )}
        <p className="text-white/50 text-sm mt-2">Best for: {data.bestFor}</p>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* Sample Itinerary */}
      {/* ----------------------------------------------------------------- */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mb-8">
          Sample Itinerary
        </h2>
        <div className="space-y-6 max-w-2xl">
          {data.itinerary.map((step, i) => (
            <div key={i} className="flex items-start gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[--color-emerald] mt-2" />
                {i < data.itinerary.length - 1 && (
                  <div className="w-px h-12 bg-[--color-emerald]/30 mt-1" />
                )}
              </div>
              <div>
                <p className="text-[--color-gold] font-semibold text-sm uppercase tracking-wider mb-1">
                  {step.time}
                </p>
                <p className="text-white/80 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* CTA */}
      {/* ----------------------------------------------------------------- */}
      <Section>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-6">
            Ready?
          </h2>
          <Button href={data.bookingHref ?? "/book"} size="lg">
            {data.ctaText}
          </Button>
        </div>
      </Section>
    </main>
  );
}
