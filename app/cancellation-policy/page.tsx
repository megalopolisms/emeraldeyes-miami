// =============================================================================
// EMERALD EYES MIAMI — Cancellation Policy Page (/cancellation-policy)
// =============================================================================
// Server component. Clear cancellation and refund policy.
// =============================================================================

import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Cancellation Policy | Emerald Eyes Miami",
  description:
    "Cancellation and refund policy for Emerald Eyes Miami yacht charters. Full refunds for weather cancellations.",
};

// ---------------------------------------------------------------------------
// Policy Items
// ---------------------------------------------------------------------------
const POLICIES = [
  {
    window: "7+ days before charter",
    policy: "Full refund minus processing fee",
    detail:
      "We understand plans change. Cancel more than 7 days out and you'll receive a full refund minus a small processing fee.",
  },
  {
    window: "3-7 days before charter",
    policy: "50% refund or full credit toward future charter",
    detail:
      "Cancel within 3 to 7 days and choose between a 50% refund or a full credit toward a future booking. Credits never expire.",
  },
  {
    window: "Less than 3 days before charter",
    policy: "No refund. Full credit toward future charter",
    detail:
      "Late cancellations can't be refunded, but your full payment is applied as credit toward any future charter. We want to get you on the water.",
  },
  {
    window: "Weather cancellations",
    policy: "Full refund or reschedule at no charge",
    detail:
      "Safety first. If weather conditions make it unsafe to charter, you'll receive a full refund or can reschedule to any available date at no additional cost.",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function CancellationPolicyPage() {
  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[30vh] px-6 py-24 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl text-white">
          Cancellation Policy
        </h1>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            We want your charter experience to be stress-free from booking to
            boarding. Here&apos;s how cancellations and refunds work.
          </p>

          <div className="space-y-6">
            {POLICIES.map((item) => (
              <div
                key={item.window}
                className="rounded-xl bg-[--color-navy-light] border border-white/10 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[--color-gold]">
                    {item.window}
                  </h3>
                  <span className="text-[--color-emerald] font-semibold text-sm">
                    {item.policy}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center py-8">
          <p className="text-white/60 text-lg mb-6">
            Questions about cancellations or rescheduling?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
            <Button href="/book">Book Your Charter</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
