// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Coast Guard Inspection for Bareboat Charters
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in CoastGuardArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import CoastGuardArticle from "@/components/blog/CoastGuardArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "What Happens During a Coast Guard Inspection on a Bareboat Charter? | Emerald Eyes Miami",
  description:
    "A complete guide to Coast Guard boardings on bareboat yacht charters in Miami. Learn what the USCG checks, what paperwork you need, safety equipment requirements, and how to pass every time.",
  alternates: {
    canonical: "/blog/coast-guard-inspection-bareboat-charter",
  },
  openGraph: {
    title:
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    description:
      "Everything you need to know about USCG boardings on bareboat charters in South Florida. Safety equipment, paperwork, passenger counts, and the bareboat structure explained.",
    url: "/blog/coast-guard-inspection-bareboat-charter",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    description:
      "Everything you need to know about USCG boardings on bareboat charters in South Florida.",
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
  description:
    "A comprehensive guide to Coast Guard boardings during bareboat yacht charters in Miami, covering safety equipment, documentation, and USCG requirements.",
  author: {
    "@type": "Organization",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://emeraldeyesmiami.com/blog/coast-guard-inspection-bareboat-charter",
  },
  articleSection: "Safety & Regulations",
  wordCount: 3200,
  inLanguage: "en",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://emeraldeyesmiami.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coast Guard Inspection on a Bareboat Charter",
      item: "https://emeraldeyesmiami.com/blog/coast-guard-inspection-bareboat-charter",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens during a Coast Guard inspection on a bareboat charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Coast Guard separates crew from guests, asks the lead charterer about captain selection, reviews the charter contract, counts passengers, checks vessel registration, inspects safety equipment (life jackets, fire extinguishers, life ring, navigation lights), and verifies captain credentials. The process typically takes about 10 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bareboat charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bareboat charter means the client rents the vessel without crew. The client becomes the temporary 'owner' and is responsible for hiring their own captain and crew. This structure is governed by USCG NVIC 7-94 guidance.",
      },
    },
    {
      "@type": "Question",
      name: "How many passengers can a bareboat charter carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bareboat charter can carry up to 12 passengers. Six or fewer passengers with owner-provided crew may operate as an uninspected vessel. Seven to twelve on a true bareboat is legal if the structure is legitimate. Thirteen or more triggers Subchapter T requirements and a Certificate of Inspection.",
      },
    },
    {
      "@type": "Question",
      name: "What safety equipment is required on a charter yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required equipment includes USCG-approved life jackets for every person on board, fire extinguishers, a Type IV throwable device (life ring), visual distress signals, a sound-producing device (horn or whistle), navigation lights, and required safety placards. All per 46 C.F.R. Part 25.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function CoastGuardInspectionPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CoastGuardArticle />
    </>
  );
}
