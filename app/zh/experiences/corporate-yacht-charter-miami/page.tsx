import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密企业游艇包船 | Emerald Eyes Miami",
  description:
    "无需多言即可令人印象深刻。水上高管活动、客户娱乐和最佳景观会议。我们处理一切。起价$5,000。",
  keywords: [
    "迈阿密企业游艇包船",
    "迈阿密商务船活动"
  ],
  alternates: {
    canonical: "/zh/experiences/corporate-yacht-charter-miami",
    languages: { en: "/experiences/corporate-yacht-charter-miami", es: "/es/experiences/corporate-yacht-charter-miami", pt: "/pt/experiences/corporate-yacht-charter-miami", de: "/de/experiences/corporate-yacht-charter-miami", fr: "/fr/experiences/corporate-yacht-charter-miami", zh: "/zh/experiences/corporate-yacht-charter-miami", ja: "/ja/experiences/corporate-yacht-charter-miami" },
  },
  openGraph: {
    title: "迈阿密企业游艇包船 | Emerald Eyes Miami",
    description:
      "团队活动、客户娱乐和迈阿密水上高管会议。",
    url: "/zh/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "企业游艇包船 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密企业游艇包船 | Emerald Eyes Miami",
    description:
      "团队活动、客户娱乐和迈阿密水上高管会议。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
