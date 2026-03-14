import type { Metadata } from "next";
import Script from "next/script";

import ContactPageClient from "@/components/pages/ContactPageClient";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
  description:
    "Contact Emerald Eyes Miami for charter questions, custom requests, and planning support for North Miami yacht experiences on Biscayne Bay.",
  keywords: [
    "contact Emerald Eyes Miami",
    "yacht rental contact Miami",
    "book a yacht North Miami",
    "Miami yacht charter phone number",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      es: "/es/contact",
      pt: "/pt/contact",
      de: "/de/contact",
      fr: "/fr/contact",
      zh: "/zh/contact",
      ja: "/ja/contact",
    },
  },
  openGraph: {
    title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
    description:
      "Reach the Emerald Eyes Miami team for charter planning, proposals, events, and custom yacht experiences.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Contact Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
    description:
      "Reach the Emerald Eyes Miami team for charter planning, proposals, events, and custom yacht experiences.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Emerald Eyes Miami",
  description:
    "Contact Emerald Eyes Miami for yacht charter questions, quotes, and event planning support in North Miami.",
  url: `${BUSINESS.siteUrl}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone || undefined,
    email: BUSINESS.email || undefined,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish", "Portuguese"],
      telephone: BUSINESS.phone || undefined,
      email: BUSINESS.email || undefined,
    },
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
      name: "Contact",
      item: `${BUSINESS.siteUrl}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </main>
  );
}
