import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | 北迈阿密豪华游艇租赁",
  description:
    "在北迈阿密预订豪华游艇包船。日落巡航、私人派对、单身派对、求婚和企业活动，尽在比斯坎湾。",
  keywords: [
    "迈阿密游艇租赁",
    "北迈阿密游艇包船",
    "迈阿密日落巡航",
    "私人游艇派对",
    "迈阿密单身派对游艇"
  ],
  alternates: {
    canonical: "/zh",
    languages: { en: "/", es: "/es", pt: "/pt", de: "/de", fr: "/fr", zh: "/zh", ja: "/ja" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | 北迈阿密豪华游艇租赁",
    description:
      "在北迈阿密预订豪华游艇包船。日落巡航、私人派对、单身派对、求婚和企业活动，尽在比斯坎湾。",
    url: "/zh",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — 北迈阿密豪华游艇租赁",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | 北迈阿密豪华游艇租赁",
    description:
      "在北迈阿密预订豪华游艇包船。日落巡航、私人派对、单身派对、求婚和企业活动，尽在比斯坎湾。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePageZH() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
