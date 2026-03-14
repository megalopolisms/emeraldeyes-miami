import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミ法人ヨットチャーター | Emerald Eyes Miami",
  description:
    "言葉なしで印象づける。水上のエグゼクティブイベント、クライアントエンターテイメント、最高の眺めでのミーティング。すべてお任せください。$5,000から。",
  keywords: [
    "マイアミ法人ヨットチャーター",
    "マイアミビジネスボートイベント"
  ],
  alternates: {
    canonical: "/ja/experiences/corporate-yacht-charter-miami",
    languages: { en: "/experiences/corporate-yacht-charter-miami", es: "/es/experiences/corporate-yacht-charter-miami", pt: "/pt/experiences/corporate-yacht-charter-miami", de: "/de/experiences/corporate-yacht-charter-miami", fr: "/fr/experiences/corporate-yacht-charter-miami", zh: "/zh/experiences/corporate-yacht-charter-miami", ja: "/ja/experiences/corporate-yacht-charter-miami" },
  },
  openGraph: {
    title: "マイアミ法人ヨットチャーター | Emerald Eyes Miami",
    description:
      "チームイベント、クライアントエンターテイメント、マイアミ水上エグゼクティブミーティング。",
    url: "/ja/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "法人ヨットチャーター — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミ法人ヨットチャーター | Emerald Eyes Miami",
    description:
      "チームイベント、クライアントエンターテイメント、マイアミ水上エグゼクティブミーティング。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
