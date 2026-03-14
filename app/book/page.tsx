import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

import BookPageClient from "@/components/pages/BookPageClient";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
  description:
    "Use the Emerald Eyes Miami planner to build your charter in minutes. Sunset cruises, private parties, proposals, bachelorettes, and custom yacht experiences from North Miami.",
  keywords: [
    "book yacht Miami",
    "rent a boat North Miami",
    "reserve a yacht charter Miami",
    "Miami yacht booking",
  ],
  alternates: {
    canonical: "/book",
    languages: {
      en: "/book",
      es: "/es/book",
      pt: "/pt/book",
      de: "/de/book",
      fr: "/fr/book",
      zh: "/zh/book",
      ja: "/ja/book",
    },
  },
  openGraph: {
    title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
    description:
      "Plan your Miami yacht charter with our interactive planner and fast follow-up from the Emerald Eyes team.",
    url: "/book",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Book a yacht charter — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
    description:
      "Plan your Miami yacht charter with our interactive planner and fast follow-up from the Emerald Eyes team.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
  description:
    "Plan and book a private yacht charter in North Miami with Emerald Eyes Miami.",
  url: `${BUSINESS.siteUrl}/book`,
  mainEntity: {
    "@type": "Service",
    name: "Private Yacht Charter Booking",
    provider: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    areaServed: "Miami-Dade County",
    serviceType: "Yacht Charter Booking",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BUSINESS.siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book",
      item: `${BUSINESS.siteUrl}/book`,
    },
  ],
};

export default function BookPage() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Script
        id="book-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <Script
        id="book-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
