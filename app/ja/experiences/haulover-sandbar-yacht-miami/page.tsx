import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミHauloverサンドバーヨット | Emerald Eyes Miami",
  description:
    "マイアミで最も有名なサンドバーパーティー。Hauloverサンドバーに停泊し、ターコイズブルーの海で泳ぎ、グループで楽しむ。$2,500から。",
  keywords: [
    "マイアミHauloverサンドバーヨット",
    "マイアミサンドバー"
  ],
  alternates: {
    canonical: "/ja/experiences/haulover-sandbar-yacht-miami",
    languages: { en: "/experiences/haulover-sandbar-yacht-miami", es: "/es/experiences/haulover-sandbar-yacht-miami", pt: "/pt/experiences/haulover-sandbar-yacht-miami", de: "/de/experiences/haulover-sandbar-yacht-miami", fr: "/fr/experiences/haulover-sandbar-yacht-miami", zh: "/zh/experiences/haulover-sandbar-yacht-miami", ja: "/ja/experiences/haulover-sandbar-yacht-miami" },
  },
  openGraph: {
    title: "マイアミHauloverサンドバーヨット | Emerald Eyes Miami",
    description:
      "マイアミで最も有名なサンドバーパーティー。停泊、水泳、楽しみ。",
    url: "/ja/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Hauloverサンドバーヨット — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミHauloverサンドバーヨット | Emerald Eyes Miami",
    description:
      "マイアミで最も有名なサンドバーパーティー。停泊、水泳、楽しみ。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
