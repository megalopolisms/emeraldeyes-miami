// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Jet Ski License in Miami
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in JetSkiLicenseArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import JetSkiLicenseArticle from "@/components/blog/JetSkiLicenseArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "Do You Need a License to Ride a Jet Ski in Miami? (2026 Guide) | Emerald Eyes Miami",
  description:
    "Florida doesn't require a jet ski license — but you may need a Boating Safety Education Card. Learn the rules, certification options, rental requirements, best spots on Biscayne Bay, restricted zones, and pricing for jet skiing in Miami.",
  keywords: [
    "jet ski license Miami",
    "do you need a license to ride a jet ski in Miami",
    "jet ski rental Miami",
    "Florida jet ski rules",
    "boating license Florida jet ski",
    "jet ski Miami Biscayne Bay",
    "where to jet ski in Miami",
    "jet ski rental requirements Florida",
    "boating safety education card Florida",
    "jet ski Star Island Miami",
  ],
  alternates: {
    canonical: "/blog/jet-ski-license-miami",
    languages: {
      en: "/blog/jet-ski-license-miami",
      es: "/es/blog/jet-ski-license-miami",
    },
  },
  openGraph: {
    title: "Do You Need a License to Ride a Jet Ski in Miami?",
    description:
      "No traditional license needed — but you may need a Boating Safety Education Card if born after 1988. Complete 2026 guide to jet skiing in Miami: rules, costs, best spots, and restricted zones.",
    url: "/blog/jet-ski-license-miami",
    type: "article",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Jet skiing on Biscayne Bay with Miami skyline — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do You Need a License to Ride a Jet Ski in Miami?",
    description:
      "No license needed — but you may need a Boating Safety Card. Complete 2026 guide: rules, costs, best spots on Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do You Need a License to Ride a Jet Ski in Miami?",
  description:
    "A comprehensive guide to jet ski licensing requirements, rental rules, Biscayne Bay riding spots, restricted zones, and pricing in Miami, Florida.",
  image: [
    "https://emeraldeyesmiami.com/images/emeraldeyes.jpg",
    "https://emeraldeyesmiami.com/images/sax.jpg",
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
    "@id": "https://emeraldeyesmiami.com/blog/jet-ski-license-miami",
  },
  articleSection: "Guides",
  wordCount: 3400,
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
      name: "Do You Need a License to Ride a Jet Ski in Miami?",
      item: "https://emeraldeyesmiami.com/blog/jet-ski-license-miami",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you need a license to ride a jet ski in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No traditional license is required. Anyone born on or after January 1, 1988 must carry a Boating Safety Education ID Card or a 90-day Temporary Certificate ($9, 30 minutes online). Those born before 1988 only need a valid photo ID. This is governed by Florida Statute § 327.395.",
      },
    },
    {
      "@type": "Question",
      name: "How old do you have to be to rent a jet ski in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must be at least 18 years old to rent a jet ski in Miami. Anyone aged 14–17 may operate a jet ski with a valid Boating Safety Education Card, but cannot rent one themselves.",
      },
    },
    {
      "@type": "Question",
      name: "Can you ride a jet ski at night in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Florida Statute § 327.39 prohibits PWC operation from 30 minutes after sunset to 30 minutes before sunrise. Jet skis are more restricted than regular boats in this regard.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to rent a jet ski in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30 minutes: $50–$75. One hour: $100–$150. Guided tours through Biscayne Bay and past Star Island: $125–$200 per person. Most operators require a $200–$500 security deposit on a credit card.",
      },
    },
    {
      "@type": "Question",
      name: "Where can you ride a jet ski in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular areas include Biscayne Bay (skyline views, calm waters), Star Island and Fisher Island (celebrity mansions), Virginia Key and Key Biscayne (open water, Cape Florida Lighthouse), and the Intracoastal Waterway. Restricted zones include the Haulover/Sunny Isles exclusion zone and the Miami River.",
      },
    },
    {
      "@type": "Question",
      name: "Can tourists ride jet skis in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — Miami is one of the best jet ski destinations in the world. Tourists born before 1988 just need a photo ID. Born after 1988? Take the 90-day Temporary Certificate exam online for $9 in about 30 minutes. Florida also accepts boating safety cards from other states if the course was NASBLA-approved.",
      },
    },
    {
      "@type": "Question",
      name: "What safety equipment is required on a jet ski in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every person on a jet ski must wear a USCG-approved non-inflatable life jacket. The operator must attach the engine cutoff lanyard to their person, clothing, or PFD at all times. Rental operators provide all required safety equipment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year to jet ski in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miami's warm climate makes jet skiing a year-round activity. October through April offers lower humidity and calm waters. Summer months bring warmer water but afternoon thunderstorms — book morning rides. The Biscayne Bay skyline views are spectacular any time of year.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function JetSkiLicenseMiamiPage() {
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
      <JetSkiLicenseArticle />
    </>
  );
}
