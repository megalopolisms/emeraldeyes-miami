import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "迈阿密游艇包船常见问题 | Emerald Eyes Miami",
  description:
    "关于Emerald Eyes Miami包船的常见问题解答。",
  alternates: {
    canonical: "/zh/faq",
    languages: { en: "/faq", es: "/es/faq", pt: "/pt/faq", de: "/de/faq", fr: "/fr/faq", zh: "/zh/faq", ja: "/ja/faq" },
  },
  openGraph: {
    title: "迈阿密游艇包船常见问题 | Emerald Eyes Miami",
    description:
      "关于Emerald Eyes Miami包船的常见问题解答。",
    url: "/zh/faq",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "迈阿密游艇包船常见问题 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密游艇包船常见问题 | Emerald Eyes Miami",
    description:
      "关于Emerald Eyes Miami包船的常见问题解答。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "包船从哪里出发？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "所有包船从我们在北迈阿密地区的合作码头出发。确认预订后将提供确切详情。",
      },
    },
    {
      "@type": "Question",
      name: "价格包含什么？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "每次包船包含持证船长、船员、燃油、基本设施、瓶装水、冰块和音响系统。摄影、DJ和餐饮等额外服务需另付费。",
      },
    },
    {
      "@type": "Question",
      name: "我们可以自带食物和饮料吗？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可以。您可以自带食物和饮料。如果您想要无忧体验，我们可以协调餐饮和开瓶服务。",
      },
    },
    {
      "@type": "Question",
      name: "提供船长吗？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "是的。船长和船员已包含在内，让您专注于体验。",
      },
    },
    {
      "@type": "Question",
      name: "如果天气变化怎么办？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "我们在每次包船前密切关注天气状况。如果天气导致出行不安全，我们将帮助您重新安排。",
      },
    }
  ],
};

export default function FAQPageZH() {
  return (
    <>
      <Script
        id="faq-schema-zh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
