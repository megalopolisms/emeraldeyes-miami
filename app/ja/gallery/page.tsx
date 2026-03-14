import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギャラリー | Emerald Eyes Miami",
  description:
    "水上で待っているものをご覧ください。サンセットクルーズ、シャンパンセットアップ、サンドバーの雰囲気、マイアミのプライベートヨットでのお祝い。",
  keywords: [
    "マイアミヨットギャラリー",
    "マイアミヨット内装写真",
    "サンセットクルーズ写真"
  ],
  alternates: {
    canonical: "/ja/gallery",
    languages: { en: "/gallery", es: "/es/gallery", pt: "/pt/gallery", de: "/de/gallery", fr: "/fr/gallery", zh: "/zh/gallery", ja: "/ja/gallery" },
  },
  openGraph: {
    title: "ギャラリー | Emerald Eyes Miami",
    description:
      "水上で待っているものをご覧ください。サンセットクルーズ、シャンパンセットアップ、サンドバーの雰囲気、マイアミのプライベートヨットでのお祝い。",
    url: "/ja/gallery",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ギャラリー | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ギャラリー | Emerald Eyes Miami",
    description:
      "水上で待っているものをご覧ください。サンセットクルーズ、シャンパンセットアップ、サンドバーの雰囲気、マイアミのプライベートヨットでのお祝い。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
