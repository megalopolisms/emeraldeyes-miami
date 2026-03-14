// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Miami Yacht Charter Prices
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in YachtPricesArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import YachtPricesArticle from "@/components/blog/YachtPricesArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "Miami Yacht Charter Prices: What Does It Actually Cost? | Emerald Eyes Miami",
  description:
    "Transparent pricing guide for private yacht charters in Miami. 4-hour charters from $2,500, 6-hour from $3,500, 8-hour from $5,000. See what's included, add-on costs, and how to save.",
  keywords: [
    "yacht charter cost miami",
    "how much yacht rental miami",
    "private yacht charter prices",
    "miami yacht rental cost",
    "boat charter price miami",
    "luxury yacht rental miami price",
    "miami boat rental cost per hour",
    "yacht party cost miami",
    "cheap yacht charter miami",
    "miami yacht charter pricing guide",
  ],
  alternates: {
    canonical: "/blog/miami-yacht-charter-prices",
    languages: {
      en: "/blog/miami-yacht-charter-prices",
      es: "/es/blog/miami-yacht-charter-prices",
    },
  },
  openGraph: {
    title: "Miami Yacht Charter Prices: What Does It Actually Cost?",
    description:
      "The real cost of a private yacht charter in Miami. 4hr from $2,500, add-ons from $100. No hidden fees. Transparent pricing from Emerald Eyes Miami.",
    url: "/blog/miami-yacht-charter-prices",
    type: "article",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Miami yacht charter pricing guide — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Yacht Charter Prices: What Does It Actually Cost?",
    description:
      "Transparent pricing guide for private yacht charters in Miami. See real costs, what's included, and how to save.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Miami Yacht Charter Prices: What Does It Actually Cost?",
  description:
    "A transparent guide to private yacht charter pricing in Miami. Covers base rates, what's included, popular add-ons, seasonal pricing, and money-saving tips.",
  image: [
    "https://emeraldeyesmiami.com/images/emeraldeyes.jpg",
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
    "@id": "https://emeraldeyesmiami.com/blog/miami-yacht-charter-prices",
  },
  articleSection: "Guides",
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
      name: "Miami Yacht Charter Prices",
      item: "https://emeraldeyesmiami.com/blog/miami-yacht-charter-prices",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to rent a yacht in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private yacht charter in Miami typically starts at $2,500 for a 4-hour outing. Prices vary by vessel size, duration, day of the week, and season. With Emerald Eyes Miami, a 4-hour charter starts at $2,500, 6 hours at $3,500, and full-day (8+ hours) at $5,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a Miami yacht charter price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Emerald Eyes Miami, every charter includes fuel for local cruising, a premium sound system, ice and coolers, floating mats, water toys, bottled water, and glassware. A USCG-licensed captain is available as an add-on — most clients hire one through us. There are no hidden fees for these essentials.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a yacht charter cost per hour in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hourly rates in Miami range from roughly $500 to $1,500+ depending on yacht size and amenities. Emerald Eyes charters start at about $625/hour based on a 4-hour minimum. Longer charters offer better per-hour value.",
      },
    },
    {
      "@type": "Question",
      name: "What are common add-on costs for a yacht charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular add-ons include a live saxophone player ($350), sushi chef ($500), jet ski rental ($200/hour), DJ ($300), professional photographer ($150), bottle service ($400), and hookah ($100). Catering packages start at around $30-50 per person.",
      },
    },
    {
      "@type": "Question",
      name: "Is fuel included in yacht charter prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With Emerald Eyes Miami, fuel for local Miami cruising is included in every charter price. You will not be charged extra for fuel on standard routes including Haulover Sandbar, Star Island, and Biscayne Bay cruises.",
      },
    },
    {
      "@type": "Question",
      name: "When is the cheapest time to charter a yacht in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most affordable time to charter is during the off-peak season from May through November, and on weekdays (Tuesday through Thursday). You can save 10-20% compared to peak season (December through April) and weekend rates.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to tip the yacht crew?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gratuity is not included in the charter price and is at your discretion. If you hire a captain through us, the industry standard in Miami is 15-20% of the base charter fee. For a $2,500 charter, that would be $375-$500. Tips are given directly to the captain.",
      },
    },
    {
      "@type": "Question",
      name: "How do I save money on a Miami yacht charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book on a weekday (Tuesday-Thursday) for better rates, choose off-peak months (May-November), book directly with the charter company instead of through aggregator platforms, and opt for a longer charter which offers better per-hour value.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function YachtPricesPage() {
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
      <YachtPricesArticle />
    </>
  );
}
