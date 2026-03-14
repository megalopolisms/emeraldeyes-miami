import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミプライベートヨットパーティー | Emerald Eyes Miami",
  description:
    "あなたの船。あなたのルール。あなたのプレイリスト。誕生日、お祝い、理由は何でも。サウンドシステム、ボトルサービス完備。$3,500から。",
  keywords: [
    "マイアミプライベートヨットパーティー",
    "マイアミボートパーティー"
  ],
  alternates: {
    canonical: "/ja/experiences/private-party-yacht-miami",
    languages: { en: "/experiences/private-party-yacht-miami", es: "/es/experiences/private-party-yacht-miami", pt: "/pt/experiences/private-party-yacht-miami", de: "/de/experiences/private-party-yacht-miami", fr: "/fr/experiences/private-party-yacht-miami", zh: "/zh/experiences/private-party-yacht-miami", ja: "/ja/experiences/private-party-yacht-miami" },
  },
  openGraph: {
    title: "マイアミプライベートヨットパーティー | Emerald Eyes Miami",
    description:
      "水上のお祝い。サウンドシステム、ボトルサービス、完璧な雰囲気を作るクルー。",
    url: "/ja/experiences/private-party-yacht-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "プライベートヨットパーティー — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミプライベートヨットパーティー | Emerald Eyes Miami",
    description:
      "水上のお祝い。サウンドシステム、ボトルサービス、完璧な雰囲気を作るクルー。",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
