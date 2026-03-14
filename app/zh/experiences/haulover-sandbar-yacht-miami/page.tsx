import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密Haulover沙洲游艇 | Emerald Eyes Miami",
  description:
    "迈阿密最著名的沙洲派对。在Haulover沙洲抛锚，在碧绿的水中游泳，与您的团队一起享受。起价$2,500。",
  keywords: [
    "迈阿密Haulover沙洲游艇",
    "迈阿密沙洲"
  ],
  alternates: {
    canonical: "/zh/experiences/haulover-sandbar-yacht-miami",
    languages: { en: "/experiences/haulover-sandbar-yacht-miami", es: "/es/experiences/haulover-sandbar-yacht-miami", pt: "/pt/experiences/haulover-sandbar-yacht-miami", de: "/de/experiences/haulover-sandbar-yacht-miami", fr: "/fr/experiences/haulover-sandbar-yacht-miami", zh: "/zh/experiences/haulover-sandbar-yacht-miami", ja: "/ja/experiences/haulover-sandbar-yacht-miami" },
  },
  openGraph: {
    title: "迈阿密Haulover沙洲游艇 | Emerald Eyes Miami",
    description:
      "迈阿密最著名的沙洲派对。抛锚、游泳、享受。",
    url: "/zh/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover沙洲游艇 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密Haulover沙洲游艇 | Emerald Eyes Miami",
    description:
      "迈阿密最著名的沙洲派对。抛锚、游泳、享受。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
