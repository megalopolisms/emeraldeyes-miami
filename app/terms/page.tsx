// =============================================================================
// EMERALD EYES MIAMI — Terms of Service Page (/terms)
// =============================================================================
// Server component. Placeholder terms of service for pre-launch.
// =============================================================================

import type { Metadata } from "next";
import Section from "@/components/ui/Section";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Terms of Service | Emerald Eyes Miami",
  description:
    "Terms of service for Emerald Eyes Miami yacht charter services.",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function TermsPage() {
  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[30vh] px-6 py-24 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl text-white">
          Terms of Service
        </h1>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white/70 text-lg leading-relaxed">
            Our complete terms of service will be published before our official
            launch. These terms will cover booking policies, liability
            limitations, cancellation procedures, and guest responsibilities.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            For questions about our terms, please visit our{" "}
            <a
              href="/contact"
              className="text-[--color-emerald] hover:underline"
            >
              contact page
            </a>{" "}
            or reach out on Instagram at{" "}
            <a
              href="https://instagram.com/EmeraldEyesMiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-emerald] hover:underline"
            >
              @EmeraldEyesMiami
            </a>
            .
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            For our current cancellation and refund policies, please see our{" "}
            <a
              href="/cancellation-policy"
              className="text-[--color-emerald] hover:underline"
            >
              Cancellation Policy
            </a>
            .
          </p>
          <p className="text-white/40 text-sm">Last updated: March 2026</p>
        </div>
      </Section>
    </main>
  );
}
