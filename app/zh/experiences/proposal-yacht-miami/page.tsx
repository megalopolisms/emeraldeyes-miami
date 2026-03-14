import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密游艇求婚 | Emerald Eyes Miami",
  description:
    "一生中最完美的'我愿意'。海上求婚布置，配有装饰、摄影师和守密的团队。起价$2,500。",
  keywords: ["迈阿密游艇求婚", "迈阿密浪漫求婚游艇"],
  alternates: {
    canonical: "/zh/experiences/proposal-yacht-miami",
    languages: {
      en: "/experiences/proposal-yacht-miami",
      es: "/es/experiences/proposal-yacht-miami",
      pt: "/pt/experiences/proposal-yacht-miami",
      de: "/de/experiences/proposal-yacht-miami",
      fr: "/fr/experiences/proposal-yacht-miami",
      zh: "/zh/experiences/proposal-yacht-miami",
      ja: "/ja/experiences/proposal-yacht-miami",
    },
  },
  openGraph: {
    title: "迈阿密游艇求婚 | Emerald Eyes Miami",
    description: "海上求婚。装饰、摄影师和守密的团队。",
    url: "/zh/experiences/proposal-yacht-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "游艇求婚 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密游艇求婚 | Emerald Eyes Miami",
    description: "海上求婚。装饰、摄影师和守密的团队。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
