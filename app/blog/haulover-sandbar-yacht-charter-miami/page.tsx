// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Haulover Sandbar by Yacht
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in HauloverSandbarArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import HauloverSandbarArticle from "@/components/blog/HauloverSandbarArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "Haulover Sandbar by Yacht: The Complete Miami Charter Guide | Emerald Eyes Miami",
  description:
    "Everything you need to know about visiting Haulover Sandbar by private yacht charter. Best times, what to bring, safety tips, rules, and how to anchor up in style from $2,500.",
  keywords: [
    "Haulover Sandbar",
    "Haulover Sandbar yacht",
    "Haulover Sandbar boat",
    "Miami sandbar",
    "yacht charter Miami",
    "bareboat charter Haulover",
    "Haulover Sandbar guide",
    "Miami boat day",
    "Haulover Inlet",
    "sandbar Miami party",
  ],
  alternates: {
    canonical: "/blog/haulover-sandbar-yacht-charter-miami",
    languages: {
      en: "/blog/haulover-sandbar-yacht-charter-miami",
      es: "/es/blog/haulover-sandbar-yacht-charter-miami",
      pt: "/pt/blog/haulover-sandbar-yacht-charter-miami",
      de: "/de/blog/haulover-sandbar-yacht-charter-miami",
      fr: "/fr/blog/haulover-sandbar-yacht-charter-miami",
      zh: "/zh/blog/haulover-sandbar-yacht-charter-miami",
      ja: "/ja/blog/haulover-sandbar-yacht-charter-miami",
    },
  },
  openGraph: {
    title: "Haulover Sandbar by Yacht: The Complete Miami Charter Guide",
    description:
      "The insider guide to Haulover Sandbar by private yacht. Best times, rules, safety, and how to get there in style. Starting at $2,500.",
    url: "/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    images: [
      {
        url: "/images/beach.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar yacht charter Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar by Yacht: The Complete Miami Charter Guide",
    description:
      "Everything you need to know about visiting Haulover Sandbar by private yacht charter in Miami.",
    images: ["/images/beach.jpg"],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Haulover Sandbar by Yacht: The Complete Miami Charter Guide",
  description:
    "A comprehensive guide to visiting Haulover Sandbar by private yacht charter in Miami, covering best times, safety, rules, what to bring, and how to anchor up in style.",
  image: [
    "https://emeraldeyesmiami.com/images/sax.jpg",
    "https://emeraldeyesmiami.com/images/sushi.jpg",
  ],
  author: {
    "@type": "Person",
    name: "Sasha",
    jobTitle: "Partner & Director of Operations",
    worksFor: {
      "@type": "Organization",
      name: "Emerald Eyes Miami",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Emerald Eyes Miami",
    logo: {
      "@type": "ImageObject",
      url: "https://emeraldeyesmiami.com/images/emeraldeyes.jpg",
    },
    url: "https://emeraldeyesmiami.com",
  },
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://emeraldeyesmiami.com/blog/haulover-sandbar-yacht-charter-miami",
  },
  articleSection: "Destinations & Guides",
  wordCount: 3500,
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
      name: "Haulover Sandbar by Yacht",
      item: "https://emeraldeyesmiami.com/blog/haulover-sandbar-yacht-charter-miami",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you get to Haulover Sandbar by boat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haulover Sandbar is located just south of Haulover Inlet in northern Biscayne Bay, approximately 7.3 nautical miles from downtown Miami via the Intracoastal Waterway. Most yacht charters depart from marinas in North Miami Beach, Aventura, or Miami Beach and reach the sandbar in 20-40 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Haulover Sandbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuesday through Thursday mornings offer the clearest water and fewest boats. Weekends draw 200+ boats and are the classic party scene. Aim for mid-to-high tide when the water is 2-4 feet deep — perfect for wading. Low tide can expose the sand and make anchoring tricky.",
      },
    },
    {
      "@type": "Question",
      name: "How deep is the water at Haulover Sandbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At mid-to-high tide, the water at Haulover Sandbar is typically 2-4 feet deep on the flats — shallow enough to stand and wade comfortably. The surrounding channels are deeper, so your captain will anchor on the shallow shelf and you can walk right off the boat.",
      },
    },
    {
      "@type": "Question",
      name: "Can you drink alcohol at Haulover Sandbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Florida allows open containers on boats. However, the captain must stay under the 0.08% BAC limit (BUI law). No glass bottles — use cans and plastic. Bring your own drinks or add a catering package to your yacht charter.",
      },
    },
    {
      "@type": "Question",
      name: "Is Haulover Sandbar the nude beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Haulover Beach (the clothing-optional beach) is on shore, north of the inlet. Haulover Sandbar is a shallow sand flat in the water south of the inlet — a completely separate location. The sandbar is a family-friendly and party-friendly boat destination.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to Haulover Sandbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunscreen (reef-safe preferred), sunglasses with a strap, a waterproof phone case, cash for floating food vendors, and your own food and drinks (no glass). On an Emerald Eyes charter, we provide floating mats, water toys, ice, coolers, glassware, and a full sound system. Most clients also add a USCG-licensed captain through us.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a yacht charter to Haulover Sandbar cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private yacht charter to Haulover Sandbar with Emerald Eyes starts at $2,500 for 4-8 hours. That includes fuel, floating mats, water toys, sound system, ice, coolers, and glassware. Most clients add a USCG-licensed captain through us. Add-ons like live saxophone, a sushi chef, or jet skis are also available.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function HauloverSandbarPage() {
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
      <HauloverSandbarArticle />
    </>
  );
}
