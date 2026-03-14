import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami — Guides & Conseils Charter Yacht",
  description:
    "Guides, conseils et connaissances d'initié sur les charters de yacht à Miami.",
  alternates: {
    canonical: "/fr/blog",
    languages: { en: "/blog", es: "/es/blog", pt: "/pt/blog", de: "/de/blog", fr: "/fr/blog", zh: "/zh/blog", ja: "/ja/blog" },
  },
  openGraph: {
    title: "Blog | Emerald Eyes Miami — Guides & Conseils Charter Yacht",
    description:
      "Guides, conseils et connaissances d'initié sur les charters de yacht à Miami.",
    url: "/fr/blog",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Blog | Emerald Eyes Miami — Guides & Conseils Charter Yacht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Emerald Eyes Miami — Guides & Conseils Charter Yacht",
    description:
      "Guides, conseils et connaissances d'initié sur les charters de yacht à Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://emeraldeyesmiami.com/fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/fr/blog",
    },
  ],
};

export default function BlogPageFR() {
  return (
    <>
      <Script
        id="blog-breadcrumb-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
