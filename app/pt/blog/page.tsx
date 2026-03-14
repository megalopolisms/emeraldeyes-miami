import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami — Guias e Dicas de Charter de Iate",
  description:
    "Guias, dicas e conhecimento interno sobre charters de iate em Miami.",
  alternates: {
    canonical: "/pt/blog",
    languages: { en: "/blog", es: "/es/blog", pt: "/pt/blog", de: "/de/blog", fr: "/fr/blog", zh: "/zh/blog", ja: "/ja/blog" },
  },
  openGraph: {
    title: "Blog | Emerald Eyes Miami — Guias e Dicas de Charter de Iate",
    description:
      "Guias, dicas e conhecimento interno sobre charters de iate em Miami.",
    url: "/pt/blog",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Blog | Emerald Eyes Miami — Guias e Dicas de Charter de Iate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Emerald Eyes Miami — Guias e Dicas de Charter de Iate",
    description:
      "Guias, dicas e conhecimento interno sobre charters de iate em Miami.",
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
      name: "Início",
      item: "https://emeraldeyesmiami.com/pt",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/pt/blog",
    },
  ],
};

export default function BlogPagePT() {
  return (
    <>
      <Script
        id="blog-breadcrumb-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
