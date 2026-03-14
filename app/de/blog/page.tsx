import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami — Yachtcharter-Guides & Tipps",
  description:
    "Guides, Tipps und Insider-Wissen über Yachtcharter in Miami.",
  alternates: {
    canonical: "/de/blog",
    languages: { en: "/blog", es: "/es/blog", pt: "/pt/blog", de: "/de/blog", fr: "/fr/blog", zh: "/zh/blog", ja: "/ja/blog" },
  },
  openGraph: {
    title: "Blog | Emerald Eyes Miami — Yachtcharter-Guides & Tipps",
    description:
      "Guides, Tipps und Insider-Wissen über Yachtcharter in Miami.",
    url: "/de/blog",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Blog | Emerald Eyes Miami — Yachtcharter-Guides & Tipps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Emerald Eyes Miami — Yachtcharter-Guides & Tipps",
    description:
      "Guides, Tipps und Insider-Wissen über Yachtcharter in Miami.",
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
      name: "Startseite",
      item: "https://emeraldeyesmiami.com/de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/de/blog",
    },
  ],
};

export default function BlogPageDE() {
  return (
    <>
      <Script
        id="blog-breadcrumb-de"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
