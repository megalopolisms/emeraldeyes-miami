import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami — Guias y Consejos de Charter de Yate",
  description:
    "Guias, consejos y conocimiento interno sobre charters de yate en Miami. Seguridad, regulaciones, destinos y como planificar el dia perfecto en el agua.",
  keywords: [
    "blog charter yate Miami",
    "guia navegacion Miami",
    "consejos seguridad yate Miami",
    "reglas bareboat charter",
    "consejos alquiler barco Miami",
  ],
  alternates: {
    canonical: "/es/blog",
    languages: {
      en: "/blog",
      es: "/es/blog",
      pt: "/pt/blog",
      de: "/de/blog",
      fr: "/fr/blog",
      zh: "/zh/blog",
      ja: "/ja/blog",
    },
  },
  openGraph: {
    title: "Blog | Emerald Eyes Miami",
    description:
      "Guias de charter de yate, consejos de seguridad e informacion sobre navegacion en Miami del equipo de Emerald Eyes.",
    url: "/es/blog",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Blog Emerald Eyes Miami — guias de charter de yate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Emerald Eyes Miami",
    description:
      "Guias de charter de yate, consejos de seguridad e informacion sobre navegacion en Miami.",
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
      name: "Inicio",
      item: "https://emeraldeyesmiami.com/es",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/es/blog",
    },
  ],
};

export default function BlogPageES() {
  return (
    <>
      <Script
        id="blog-breadcrumb-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
