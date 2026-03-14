import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "マイアミ初めてのヨットレンタル：完全ガイド | Emerald Eyes Miami",
  description:
    "マイアミで初めてヨットをレンタルする際に知っておくべきすべて。",
  keywords: [
    "マイアミ初めてヨットレンタル",
    "ヨット初心者ガイド"
  ],
  alternates: {
    canonical: "/ja/blog/first-time-yacht-rental-miami",
    languages: { en: "/blog/first-time-yacht-rental-miami", es: "/es/blog/first-time-yacht-rental-miami", pt: "/pt/blog/first-time-yacht-rental-miami", de: "/de/blog/first-time-yacht-rental-miami", fr: "/fr/blog/first-time-yacht-rental-miami", zh: "/zh/blog/first-time-yacht-rental-miami", ja: "/ja/blog/first-time-yacht-rental-miami" },
  },
  openGraph: {
    title:
      "マイアミ初めてのヨットレンタル：完全ガイド | Emerald Eyes Miami",
    description:
      "マイアミで初めてヨットをレンタルする際に知っておくべきすべて。",
    url: "/ja/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "マイアミ初めてのヨットレンタル：完全ガイド | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "マイアミ初めてのヨットレンタル：完全ガイド | Emerald Eyes Miami",
    description:
      "マイアミで初めてヨットをレンタルする際に知っておくべきすべて。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
