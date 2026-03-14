import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "我们的船队 | Emerald Eyes Miami",
  description:
    "北迈阿密提供私密游艇、派对船和豪华包船。告诉我们您的团队规模和风格——我们为您找到完美的游艇。",
  keywords: [
    "迈阿密游艇船队",
    "迈阿密游艇尺寸",
    "北迈阿密派对船"
  ],
  alternates: {
    canonical: "/zh/fleet",
    languages: { en: "/fleet", es: "/es/fleet", pt: "/pt/fleet", de: "/de/fleet", fr: "/fr/fleet", zh: "/zh/fleet", ja: "/ja/fleet" },
  },
  openGraph: {
    title: "我们的船队 | Emerald Eyes Miami",
    description:
      "北迈阿密提供私密游艇、派对船和豪华包船。告诉我们您的团队规模和风格——我们为您找到完美的游艇。",
    url: "/zh/fleet",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "我们的船队 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "我们的船队 | Emerald Eyes Miami",
    description:
      "北迈阿密提供私密游艇、派对船和豪华包船。告诉我们您的团队规模和风格——我们为您找到完美的游艇。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
