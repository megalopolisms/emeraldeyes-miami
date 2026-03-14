import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "体验 | Emerald Eyes Miami",
  description:
    "日落巡航、私人派对、企业包船、单身派对、求婚和Haulover沙洲冒险。选择您在迈阿密的完美游艇体验。",
  keywords: [
    "迈阿密游艇体验",
    "迈阿密船只包船套餐",
    "迈阿密私人游艇游览"
  ],
  alternates: {
    canonical: "/zh/experiences",
    languages: { en: "/experiences", es: "/es/experiences", pt: "/pt/experiences", de: "/de/experiences", fr: "/fr/experiences", zh: "/zh/experiences", ja: "/ja/experiences" },
  },
  openGraph: {
    title: "体验 | Emerald Eyes Miami",
    description:
      "日落巡航、私人派对、企业包船、单身派对、求婚和Haulover沙洲冒险。选择您在迈阿密的完美游艇体验。",
    url: "/zh/experiences",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "体验 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "体验 | Emerald Eyes Miami",
    description:
      "日落巡航、私人派对、企业包船、单身派对、求婚和Haulover沙洲冒险。选择您在迈阿密的完美游艇体验。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
