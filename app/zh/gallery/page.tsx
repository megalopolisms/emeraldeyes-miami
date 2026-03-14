import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "图库 | Emerald Eyes Miami",
  description:
    "看看水上等待您的精彩。日落巡航、香槟布置、沙洲风情和迈阿密私人游艇上的庆祝活动。",
  keywords: [
    "迈阿密游艇图库",
    "迈阿密游艇内部照片",
    "日落巡航照片"
  ],
  alternates: {
    canonical: "/zh/gallery",
    languages: { en: "/gallery", es: "/es/gallery", pt: "/pt/gallery", de: "/de/gallery", fr: "/fr/gallery", zh: "/zh/gallery", ja: "/ja/gallery" },
  },
  openGraph: {
    title: "图库 | Emerald Eyes Miami",
    description:
      "看看水上等待您的精彩。日落巡航、香槟布置、沙洲风情和迈阿密私人游艇上的庆祝活动。",
    url: "/zh/gallery",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "图库 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "图库 | Emerald Eyes Miami",
    description:
      "看看水上等待您的精彩。日落巡航、香槟布置、沙洲风情和迈阿密私人游艇上的庆祝活动。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
