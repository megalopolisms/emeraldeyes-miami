import type { Metadata } from "next";
import Script from "next/script";

import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title: "Miami Yacht Charter FAQ | Emerald Eyes Miami",
  description:
    "Answers to common questions about Emerald Eyes Miami charters, including departures, inclusions, weather, deposits, photographers, and transportation.",
  keywords: [
    "yacht charter FAQ",
    "Miami boat rental rules",
    "what to bring on yacht",
    "yacht weather policy",
    "Emerald Eyes Miami FAQ",
  ],
  alternates: {
    canonical: "/faq",
    languages: {
      en: "/faq",
      es: "/es/faq",
      pt: "/pt/faq",
      de: "/de/faq",
      fr: "/fr/faq",
      zh: "/zh/faq",
      ja: "/ja/faq",
    },
  },
  openGraph: {
    title: "Miami Yacht Charter FAQ | Emerald Eyes Miami",
    description:
      "Read common Emerald Eyes Miami charter questions about planning, inclusions, departures, and add-ons before you book.",
    url: "/faq",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Miami yacht charter FAQ — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Yacht Charter FAQ | Emerald Eyes Miami",
    description:
      "Answers to common questions about Emerald Eyes Miami charters, departures, inclusions, and weather policy.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// FAQ data matched to FAQPageClient for Schema generation
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do charters depart from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All charters depart from our partner marina in the North Miami area. Exact marina details and directions are provided once your booking is being finalized. We're minutes from Biscayne Bay with direct Atlantic access.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the charter price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every charter includes fuel, bottled water, ice, coolers, a premium sound system, floating mats, water toys, and glassware. A USCG-licensed captain is available as an add-on — most clients add one. Add-ons like photography, DJ, sushi chef, bottle service, and transportation are also available separately.",
      },
    },
    {
      "@type": "Question",
      name: "Can we bring our own food and drinks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You're welcome to bring your own food and beverages. If you want a hands-off experience, we can coordinate catering and curated bottle service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a captain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a bareboat charter, meaning the yacht comes without a captain by default. Most clients add a USCG-licensed captain through us — it's the easiest way to handle the logistics so you can focus on the experience.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the weather changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor conditions closely before every charter. If weather makes it unsafe to go out, we will help you reschedule or review refund options according to the booking terms.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
