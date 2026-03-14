// =============================================================================
// EMERALD EYES MIAMI — Privacy Policy Page (/privacy)
// =============================================================================
// Server component. Placeholder privacy policy for pre-launch.
// =============================================================================

import type { Metadata } from "next";
import Section from "@/components/ui/Section";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Privacy Policy | Emerald Eyes Miami",
  description:
    "Privacy policy for Emerald Eyes Miami yacht charter services in North Miami, Florida.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Emerald Eyes Miami",
    description:
      "Privacy policy for Emerald Eyes Miami yacht charter services.",
    url: "/privacy",
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function PrivacyPage() {
  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[30vh] px-6 py-24 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl text-white">
          Privacy Policy
        </h1>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white/70 text-lg leading-relaxed">
            This privacy policy will be published before our official launch. We
            are committed to protecting your personal information and being
            transparent about how we collect, use, and share it.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            For questions about your privacy or our data practices, please
            contact us at{" "}
            <a
              href="https://instagram.com/EmeraldEyesMiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-emerald] hover:underline"
            >
              @EmeraldEyesMiami
            </a>{" "}
            on Instagram or through our{" "}
            <a
              href="/contact"
              className="text-[--color-emerald] hover:underline"
            >
              contact page
            </a>
            .
          </p>
          <p className="text-white/40 text-sm">Last updated: March 2026</p>
        </div>
      </Section>
    </main>
  );
}
