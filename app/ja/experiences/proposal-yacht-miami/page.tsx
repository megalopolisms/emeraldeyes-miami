import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミヨットプロポーズ | Emerald Eyes Miami",
  description:
    "人生で最も完璧な「はい」。海上でのプロポーズセッティング、装飾、カメラマン、秘密を守るチーム。$2,500から。",
  keywords: [
    "マイアミヨットプロポーズ",
    "マイアミロマンチックプロポーズヨット"
  ],
  alternates: {
    canonical: "/ja/experiences/proposal-yacht-miami",
    languages: { en: "/experiences/proposal-yacht-miami", es: "/es/experiences/proposal-yacht-miami", pt: "/pt/experiences/proposal-yacht-miami", de: "/de/experiences/proposal-yacht-miami", fr: "/fr/experiences/proposal-yacht-miami", zh: "/zh/experiences/proposal-yacht-miami", ja: "/ja/experiences/proposal-yacht-miami" },
  },
  openGraph: {
    title: "マイアミヨットプロポーズ | Emerald Eyes Miami",
    description:
      "海上でのプロポーズ。装飾、カメラマン、秘密を守るチーム。",
    url: "/ja/experiences/proposal-yacht-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ヨットプロポーズ — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミヨットプロポーズ | Emerald Eyes Miami",
    description:
      "海上でのプロポーズ。装飾、カメラマン、秘密を守るチーム。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
