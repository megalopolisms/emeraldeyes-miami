// =============================================================================
// EMERALD EYES MIAMI — Blog Article: First Time Renting a Yacht in Miami
// =============================================================================
// Server component for SEO metadata + JSON-LD. Content in FirstTimeYachtArticle.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import FirstTimeYachtArticle from "@/components/blog/FirstTimeYachtArticle";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "First Time Renting a Yacht in Miami? Everything You Need to Know | Emerald Eyes Miami",
  description:
    "The complete beginner's guide to yacht charters in Miami. Booking process, what to bring, etiquette, safety, common mistakes to avoid, and everything first-timers need to know. Charters from $2,500.",
  keywords: [
    "first time yacht rental miami",
    "renting a yacht in miami",
    "yacht charter for beginners miami",
    "how to rent a yacht miami",
    "miami yacht rental tips",
    "first time boat charter",
    "yacht etiquette",
    "what to bring yacht charter",
    "yacht charter safety",
    "bareboat charter miami",
    "miami yacht rental cost",
    "yacht tipping guide",
  ],
  alternates: {
    canonical: "/blog/first-time-yacht-rental-miami",
    languages: {
      en: "/blog/first-time-yacht-rental-miami",
      es: "/es/blog/first-time-yacht-rental-miami",
    },
  },
  openGraph: {
    title: "First Time Renting a Yacht in Miami? Everything You Need to Know",
    description:
      "The complete beginner's guide to yacht charters in Miami. Booking, etiquette, safety, what to bring, and common mistakes to avoid. Charters from $2,500.",
    url: "/blog/first-time-yacht-rental-miami",
    type: "article",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "First time yacht rental Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Time Renting a Yacht in Miami? Everything You Need to Know",
    description:
      "The complete beginner's guide to yacht charters in Miami — booking, etiquette, safety, and tips.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "First Time Renting a Yacht in Miami? Everything You Need to Know",
  description:
    "A comprehensive beginner's guide to renting a yacht in Miami, covering the booking process, what to expect, what to bring, yacht etiquette, safety basics, common mistakes to avoid, and FAQs for first-time charter guests.",
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
    "@id": "https://emeraldeyesmiami.com/blog/first-time-yacht-rental-miami",
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
      name: "First Time Renting a Yacht in Miami",
      item: "https://emeraldeyesmiami.com/blog/first-time-yacht-rental-miami",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a boating license to rent a yacht in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every Emerald Eyes charter comes with a USCG-licensed captain who handles all navigation and boat operations. You don't need any boating experience or certifications.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bring my own food and drinks on a yacht charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most guests bring their own cooler with drinks and snacks. We provide ice, coolers, and glassware. No glass bottles — cans and plastic only. You can also add catering packages like a sushi chef or bottle service.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book a yacht charter in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the best selection, book 1-2 weeks ahead for weekday charters and 2-3 weeks ahead for weekends. Peak season (November through April) and holidays can book up a month or more in advance.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the weather is bad on my charter day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor weather closely. If conditions are unsafe, we'll reschedule your charter at no extra cost. Light rain usually clears quickly in Miami — your captain will make the call on the morning of your trip.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to bring kids on a yacht charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have life jackets in children's sizes, and our crew is experienced with families. Kids under 6 are required to wear a life jacket at all times. The sandbar experiences are especially popular with families.",
      },
    },
    {
      "@type": "Question",
      name: "How much should I tip the captain and crew?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "15-20% of the total charter cost is standard in the industry. Cash is preferred and can be given directly to the captain at the end of the trip, who will split it with the crew.",
      },
    },
    {
      "@type": "Question",
      name: "What's the cancellation policy for a yacht charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cancellations more than 48 hours before departure receive a full refund. Within 48 hours, your deposit may be applied to a future date. Weather cancellations are always rescheduled at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I play my own music on the yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every yacht has a premium Bluetooth sound system. Connect your phone and DJ the entire trip. We also have curated playlists if you'd rather just vibe.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function FirstTimeYachtRentalPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FirstTimeYachtArticle />
    </>
  );
}
