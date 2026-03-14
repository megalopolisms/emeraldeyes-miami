import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ハウローバーサンドバー：完全ヨットチャーターガイド | Emerald Eyes Miami",
  description:
    "ヨットチャーターでハウローバーサンドバーを訪れるために知っておくべきすべて。",
  keywords: [
    "ハウローバーサンドバーヨットチャーター",
    "マイアミサンドバー"
  ],
  alternates: {
    canonical: "/ja/blog/haulover-sandbar-yacht-charter-miami",
    languages: { en: "/blog/haulover-sandbar-yacht-charter-miami", es: "/es/blog/haulover-sandbar-yacht-charter-miami", pt: "/pt/blog/haulover-sandbar-yacht-charter-miami", de: "/de/blog/haulover-sandbar-yacht-charter-miami", fr: "/fr/blog/haulover-sandbar-yacht-charter-miami", zh: "/zh/blog/haulover-sandbar-yacht-charter-miami", ja: "/ja/blog/haulover-sandbar-yacht-charter-miami" },
  },
  openGraph: {
    title:
      "ハウローバーサンドバー：完全ヨットチャーターガイド | Emerald Eyes Miami",
    description:
      "ヨットチャーターでハウローバーサンドバーを訪れるために知っておくべきすべて。",
    url: "/ja/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ハウローバーサンドバー：完全ヨットチャーターガイド | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ハウローバーサンドバー：完全ヨットチャーターガイド | Emerald Eyes Miami",
    description:
      "ヨットチャーターでハウローバーサンドバーを訪れるために知っておくべきすべて。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
