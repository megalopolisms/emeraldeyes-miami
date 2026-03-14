import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | Emerald Eyes Miami",
  description:
    "ノースマイアミで設立。フロリダ海峡からのプレミアムヨット体験。気取らないラグジュアリー、すべてのディテールにこだわり。",
  keywords: [
    "Emerald Eyes Miamiについて",
    "マイアミヨット会社",
    "ノースマイアミボートレンタル"
  ],
  alternates: {
    canonical: "/ja/about",
    languages: { en: "/about", es: "/es/about", pt: "/pt/about", de: "/de/about", fr: "/fr/about", zh: "/zh/about", ja: "/ja/about" },
  },
  openGraph: {
    title: "会社概要 | Emerald Eyes Miami",
    description:
      "ノースマイアミで設立。フロリダ海峡からのプレミアムヨット体験。気取らないラグジュアリー、すべてのディテールにこだわり。",
    url: "/ja/about",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "会社概要 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要 | Emerald Eyes Miami",
    description:
      "ノースマイアミで設立。フロリダ海峡からのプレミアムヨット体験。気取らないラグジュアリー、すべてのディテールにこだわり。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/about/page";
