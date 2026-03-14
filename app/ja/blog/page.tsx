import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "ブログ | Emerald Eyes Miami — ヨットチャーターガイド＆ヒント",
  description:
    "マイアミのヨットチャーターに関するガイド、ヒント、インサイダー知識。",
  alternates: {
    canonical: "/ja/blog",
    languages: { en: "/blog", es: "/es/blog", pt: "/pt/blog", de: "/de/blog", fr: "/fr/blog", zh: "/zh/blog", ja: "/ja/blog" },
  },
  openGraph: {
    title: "ブログ | Emerald Eyes Miami — ヨットチャーターガイド＆ヒント",
    description:
      "マイアミのヨットチャーターに関するガイド、ヒント、インサイダー知識。",
    url: "/ja/blog",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ブログ | Emerald Eyes Miami — ヨットチャーターガイド＆ヒント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ブログ | Emerald Eyes Miami — ヨットチャーターガイド＆ヒント",
    description:
      "マイアミのヨットチャーターに関するガイド、ヒント、インサイダー知識。",
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
      name: "ホーム",
      item: "https://emeraldeyesmiami.com/ja",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/ja/blog",
    },
  ],
};

export default function BlogPageJA() {
  return (
    <>
      <Script
        id="blog-breadcrumb-ja"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
