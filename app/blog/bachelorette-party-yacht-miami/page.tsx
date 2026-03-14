// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Bachelorette Party on a Yacht in Miami
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in BacheloretteArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import BacheloretteArticle from "@/components/blog/BacheloretteArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "Bachelorette Party on a Yacht in Miami: The Complete Planning Guide | Emerald Eyes Miami",
  description:
    "Plan the ultimate bachelorette party on a yacht in Miami. Itineraries, pricing, what to bring, add-ons like live sax and sushi chefs, and insider tips from our team. Starting at $3,500.",
  keywords: [
    "bachelorette party yacht miami",
    "bachelorette boat party miami",
    "miami yacht bachelorette",
    "bachelorette yacht rental miami",
    "bachelorette party boat miami",
    "miami bachelorette cruise",
    "bachelorette boat rental miami",
    "yacht party bachelorette miami",
    "miami bachelorette ideas",
    "bachelorette party planning miami",
  ],
  alternates: {
    canonical: "/blog/bachelorette-party-yacht-miami",
    languages: {
      en: "/blog/bachelorette-party-yacht-miami",
      es: "/es/blog/bachelorette-party-yacht-miami",
    },
  },
  openGraph: {
    title:
      "Bachelorette Party on a Yacht in Miami: The Complete Planning Guide",
    description:
      "The insider guide to throwing an unforgettable bachelorette party on a private yacht in Miami. Itineraries, pricing, add-ons, and tips. Starting at $3,500.",
    url: "/blog/bachelorette-party-yacht-miami",
    type: "article",
    images: [
      {
        url: "/images/sax.jpg",
        width: 784,
        height: 1168,
        alt: "Bachelorette party on a yacht in Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bachelorette Party on a Yacht in Miami: The Complete Planning Guide",
    description:
      "Plan the ultimate bachelorette yacht party in Miami. Itineraries, pricing, add-ons, and tips from Emerald Eyes Miami.",
    images: ["/images/sax.jpg"],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Bachelorette Party on a Yacht in Miami: The Complete Planning Guide",
  description:
    "A comprehensive guide to planning an unforgettable bachelorette party on a private yacht in Miami, covering itineraries, pricing, add-ons, what to bring, group size considerations, and insider tips.",
  image: [
    "https://emeraldeyesmiami.com/images/sax.jpg",
    "https://emeraldeyesmiami.com/images/sushi.jpg",
    "https://emeraldeyesmiami.com/images/emeraldeyes.jpg",
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
    "@id": "https://emeraldeyesmiami.com/blog/bachelorette-party-yacht-miami",
  },
  articleSection: "Experiences & Planning",
  wordCount: 4200,
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
      name: "Bachelorette Party on a Yacht",
      item: "https://emeraldeyesmiami.com/blog/bachelorette-party-yacht-miami",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a bachelorette yacht party cost in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private bachelorette yacht charter with Emerald Eyes starts at $3,500 for 4 hours. That includes a premium sound system, floating mats, ice, coolers, and glassware. A USCG-licensed captain is available as an add-on — most groups hire one through us. Popular add-ons like a live sax player ($350), sushi chef ($500), or jet skis ($200) are also available. Most bachelorette groups spend $4,000-$6,000 for a fully loaded 4-6 hour experience.",
      },
    },
    {
      "@type": "Question",
      name: "How many people can fit on a bachelorette yacht in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our yachts accommodate groups of 2 to 25+ guests. The sweet spot for bachelorette parties is 8-15 people — large enough for a great party, intimate enough for everyone to enjoy the yacht. Groups over 13 may require a larger vessel at adjusted pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Can we bring our own alcohol on the yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Florida allows open containers on boats, so you can bring your own drinks. We provide ice, coolers, and glassware. No glass bottles — use cans or plastic. You can also add a champagne package or bottle service through us. The captain must stay under the 0.08% BAC limit (BUI law).",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year for a bachelorette yacht party in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miami is a year-round destination. October through April offers the most comfortable weather with low humidity and calm seas. Summer (June-September) is hotter but brings fewer crowds and lower prices. Sunset cruises are stunning year-round. Book 2-3 months ahead during peak season (December-April) and holidays.",
      },
    },
    {
      "@type": "Question",
      name: "What should we wear on a bachelorette yacht party?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swimsuits with cover-ups are the standard. Many bachelorette groups coordinate matching swimsuits or white outfits for the bride-to-be and a color for the bridal party. Bring a change of clothes if you plan to go out afterward. Flat shoes or bare feet only on board — no heels.",
      },
    },
    {
      "@type": "Question",
      name: "Where does the yacht cruise during a bachelorette party?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular bachelorette route cruises past Star Island and the celebrity mansions on Millionaire's Row, then anchors at Haulover Sandbar or Nixon Sandbar for swimming and floating. Sunset cruises finish with the Miami skyline glowing at golden hour. Your captain can customize the route based on your group's vibe.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should we book a bachelorette yacht in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book 2-3 months in advance for peak season (December-April) and holiday weekends. For summer and midweek dates, 3-4 weeks is usually sufficient. Last-minute bookings are sometimes available, but you risk limited vessel options. A $500 deposit secures your date.",
      },
    },
    {
      "@type": "Question",
      name: "Can we bring decorations on the yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — banners, sashes, photo props, flower arrangements, and signs are welcome. No balloons, glitter, or confetti, as these are prohibited to protect Miami's waters. We also offer a custom decorations add-on where our team handles setup before you arrive.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function BachelorettePartyYachtMiamiPage() {
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
      <BacheloretteArticle />
    </>
  );
}
