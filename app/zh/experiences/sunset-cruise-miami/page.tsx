import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密日落巡航 | Emerald Eyes Miami",
  description:
    "观赏迈阿密天际线在夕阳下闪耀。私密团体、香槟和一个难忘的夜晚。起价$2,500。",
  keywords: [
    "迈阿密日落巡航",
    "迈阿密浪漫游船"
  ],
  alternates: {
    canonical: "/zh/experiences/sunset-cruise-miami",
    languages: { en: "/experiences/sunset-cruise-miami", es: "/es/experiences/sunset-cruise-miami", pt: "/pt/experiences/sunset-cruise-miami", de: "/de/experiences/sunset-cruise-miami", fr: "/fr/experiences/sunset-cruise-miami", zh: "/zh/experiences/sunset-cruise-miami", ja: "/ja/experiences/sunset-cruise-miami" },
  },
  openGraph: {
    title: "迈阿密日落巡航 | Emerald Eyes Miami",
    description:
      "水上黄金时刻。香槟、海风和迈阿密日落天际线。",
    url: "/zh/experiences/sunset-cruise-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "比斯坎湾日落巡航 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密日落巡航 | Emerald Eyes Miami",
    description:
      "水上黄金时刻。香槟、海风和迈阿密日落天际线。",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
