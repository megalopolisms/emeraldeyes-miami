import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "体験 | Emerald Eyes Miami",
  description:
    "サンセットクルーズ、プライベートパーティー、法人チャーター、バチェロレッテパーティー、プロポーズ、ハウローバーサンドバーアドベンチャー。マイアミで最高のヨット体験をお選びください。",
  keywords: [
    "マイアミヨット体験",
    "マイアミボートチャーターパッケージ",
    "マイアミプライベートヨットツアー"
  ],
  alternates: {
    canonical: "/ja/experiences",
    languages: { en: "/experiences", es: "/es/experiences", pt: "/pt/experiences", de: "/de/experiences", fr: "/fr/experiences", zh: "/zh/experiences", ja: "/ja/experiences" },
  },
  openGraph: {
    title: "体験 | Emerald Eyes Miami",
    description:
      "サンセットクルーズ、プライベートパーティー、法人チャーター、バチェロレッテパーティー、プロポーズ、ハウローバーサンドバーアドベンチャー。マイアミで最高のヨット体験をお選びください。",
    url: "/ja/experiences",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "体験 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "体験 | Emerald Eyes Miami",
    description:
      "サンセットクルーズ、プライベートパーティー、法人チャーター、バチェロレッテパーティー、プロポーズ、ハウローバーサンドバーアドベンチャー。マイアミで最高のヨット体験をお選びください。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
