import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "マイアミヨットバチェロレッテパーティー：完全ガイド | Emerald Eyes Miami",
  description:
    "マイアミのヨットで完璧なバチェロレッテパーティーを計画。",
  keywords: [
    "マイアミヨットバチェロレッテパーティー",
    "マイアミボートバチェロレッテ"
  ],
  alternates: {
    canonical: "/ja/blog/bachelorette-party-yacht-miami",
    languages: { en: "/blog/bachelorette-party-yacht-miami", es: "/es/blog/bachelorette-party-yacht-miami", pt: "/pt/blog/bachelorette-party-yacht-miami", de: "/de/blog/bachelorette-party-yacht-miami", fr: "/fr/blog/bachelorette-party-yacht-miami", zh: "/zh/blog/bachelorette-party-yacht-miami", ja: "/ja/blog/bachelorette-party-yacht-miami" },
  },
  openGraph: {
    title:
      "マイアミヨットバチェロレッテパーティー：完全ガイド | Emerald Eyes Miami",
    description:
      "マイアミのヨットで完璧なバチェロレッテパーティーを計画。",
    url: "/ja/blog/bachelorette-party-yacht-miami",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "マイアミヨットバチェロレッテパーティー：完全ガイド | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "マイアミヨットバチェロレッテパーティー：完全ガイド | Emerald Eyes Miami",
    description:
      "マイアミのヨットで完璧なバチェロレッテパーティーを計画。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/bachelorette-party-yacht-miami/page";
