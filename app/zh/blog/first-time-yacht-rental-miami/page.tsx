import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "迈阿密首次租游艇：完整指南 | Emerald Eyes Miami",
  description:
    "首次在迈阿密租游艇需要知道的一切。",
  keywords: [
    "迈阿密首次租游艇",
    "游艇新手指南"
  ],
  alternates: {
    canonical: "/zh/blog/first-time-yacht-rental-miami",
    languages: { en: "/blog/first-time-yacht-rental-miami", es: "/es/blog/first-time-yacht-rental-miami", pt: "/pt/blog/first-time-yacht-rental-miami", de: "/de/blog/first-time-yacht-rental-miami", fr: "/fr/blog/first-time-yacht-rental-miami", zh: "/zh/blog/first-time-yacht-rental-miami", ja: "/ja/blog/first-time-yacht-rental-miami" },
  },
  openGraph: {
    title:
      "迈阿密首次租游艇：完整指南 | Emerald Eyes Miami",
    description:
      "首次在迈阿密租游艇需要知道的一切。",
    url: "/zh/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "迈阿密首次租游艇：完整指南 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "迈阿密首次租游艇：完整指南 | Emerald Eyes Miami",
    description:
      "首次在迈阿密租游艇需要知道的一切。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
