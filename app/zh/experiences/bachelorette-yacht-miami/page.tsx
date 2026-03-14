import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密游艇单身派对 | Emerald Eyes Miami",
  description:
    "告别单身的完美舞台。香槟、DJ、装饰和水上Instagram照片。新娘值得最好的。起价$3,500。",
  keywords: [
    "迈阿密游艇单身派对",
    "迈阿密游船单身派对"
  ],
  alternates: {
    canonical: "/zh/experiences/bachelorette-yacht-miami",
    languages: { en: "/experiences/bachelorette-yacht-miami", es: "/es/experiences/bachelorette-yacht-miami", pt: "/pt/experiences/bachelorette-yacht-miami", de: "/de/experiences/bachelorette-yacht-miami", fr: "/fr/experiences/bachelorette-yacht-miami", zh: "/zh/experiences/bachelorette-yacht-miami", ja: "/ja/experiences/bachelorette-yacht-miami" },
  },
  openGraph: {
    title: "迈阿密游艇单身派对 | Emerald Eyes Miami",
    description:
      "香槟、DJ、装饰和水上告别单身的完美舞台。",
    url: "/zh/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "游艇单身派对 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密游艇单身派对 | Emerald Eyes Miami",
    description:
      "香槟、DJ、装饰和水上告别单身的完美舞台。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
