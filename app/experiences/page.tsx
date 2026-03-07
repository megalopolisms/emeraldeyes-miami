// =============================================================================
// EMERALD EYES MIAMI — Experiences Hub Page (/experiences)
// =============================================================================
// Server component. Grid of 6 experience cards + hero + CTA.
// Data sourced from EXPERIENCES constant.
// =============================================================================

import type { Metadata } from "next";
import { EXPERIENCES } from "@/lib/constants";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import type { Experience } from "@/lib/types";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Experiences | Emerald Eyes Miami",
  description:
    "Sunset cruises, private parties, corporate charters, bachelorette trips, proposals, and Haulover Sandbar adventures. Choose your perfect Miami yacht experience.",
  openGraph: {
    title: "Yacht Experiences | Emerald Eyes Miami",
    description:
      "Every charter is tailored. Sunset cruises, private parties, corporate events, and more on the water in Miami.",
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function ExperiencesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[45vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Our Experiences
          </h1>
          <p className="text-xl text-white/70">
            Every charter is tailored. Choose your starting point.
          </p>
        </div>
      </section>

      {/* Experience Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(EXPERIENCES as readonly Experience[]).map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s chat. We&apos;ll build the perfect experience together.
          </p>
          <Button href="/book" size="lg">
            Plan Your Charter
          </Button>
        </div>
      </Section>
    </main>
  );
}
