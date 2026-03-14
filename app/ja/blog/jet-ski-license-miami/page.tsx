import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "マイアミジェットスキーライセンス：知っておくべきすべて | Emerald Eyes Miami",
  description:
    "マイアミでジェットスキーにライセンスは必要？要件の完全ガイド。",
  keywords: [
    "マイアミジェットスキーライセンス",
    "フロリダボート免許"
  ],
  alternates: {
    canonical: "/ja/blog/jet-ski-license-miami",
    languages: { en: "/blog/jet-ski-license-miami", es: "/es/blog/jet-ski-license-miami", pt: "/pt/blog/jet-ski-license-miami", de: "/de/blog/jet-ski-license-miami", fr: "/fr/blog/jet-ski-license-miami", zh: "/zh/blog/jet-ski-license-miami", ja: "/ja/blog/jet-ski-license-miami" },
  },
  openGraph: {
    title:
      "マイアミジェットスキーライセンス：知っておくべきすべて | Emerald Eyes Miami",
    description:
      "マイアミでジェットスキーにライセンスは必要？要件の完全ガイド。",
    url: "/ja/blog/jet-ski-license-miami",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "マイアミジェットスキーライセンス：知っておくべきすべて | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "マイアミジェットスキーライセンス：知っておくべきすべて | Emerald Eyes Miami",
    description:
      "マイアミでジェットスキーにライセンスは必要？要件の完全ガイド。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
