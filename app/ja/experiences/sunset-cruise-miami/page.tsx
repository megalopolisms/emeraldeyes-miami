import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミサンセットクルーズ | Emerald Eyes Miami",
  description:
    "夕日に輝くマイアミのスカイラインをご覧ください。少人数グループ、シャンパン、忘れられない夜を。$2,500から。",
  keywords: [
    "マイアミサンセットクルーズ",
    "マイアミロマンチッククルーズ"
  ],
  alternates: {
    canonical: "/ja/experiences/sunset-cruise-miami",
    languages: { en: "/experiences/sunset-cruise-miami", es: "/es/experiences/sunset-cruise-miami", pt: "/pt/experiences/sunset-cruise-miami", de: "/de/experiences/sunset-cruise-miami", fr: "/fr/experiences/sunset-cruise-miami", zh: "/zh/experiences/sunset-cruise-miami", ja: "/ja/experiences/sunset-cruise-miami" },
  },
  openGraph: {
    title: "マイアミサンセットクルーズ | Emerald Eyes Miami",
    description:
      "水上のゴールデンアワー。シャンパン、海風、マイアミのサンセットスカイライン。",
    url: "/ja/experiences/sunset-cruise-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "ビスケーン湾サンセットクルーズ — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミサンセットクルーズ | Emerald Eyes Miami",
    description:
      "水上のゴールデンアワー。シャンパン、海風、マイアミのサンセットスカイライン。",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
