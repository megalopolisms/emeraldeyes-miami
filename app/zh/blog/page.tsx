import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "博客 | Emerald Eyes Miami — 游艇包船指南与建议",
  description:
    "迈阿密游艇包船的指南、建议和内部知识。",
  alternates: {
    canonical: "/zh/blog",
    languages: { en: "/blog", es: "/es/blog", pt: "/pt/blog", de: "/de/blog", fr: "/fr/blog", zh: "/zh/blog", ja: "/ja/blog" },
  },
  openGraph: {
    title: "博客 | Emerald Eyes Miami — 游艇包船指南与建议",
    description:
      "迈阿密游艇包船的指南、建议和内部知识。",
    url: "/zh/blog",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "博客 | Emerald Eyes Miami — 游艇包船指南与建议",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 | Emerald Eyes Miami — 游艇包船指南与建议",
    description:
      "迈阿密游艇包船的指南、建议和内部知识。",
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
      name: "首页",
      item: "https://emeraldeyesmiami.com/zh",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/zh/blog",
    },
  ],
};

export default function BlogPageZH() {
  return (
    <>
      <Script
        id="blog-breadcrumb-zh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
