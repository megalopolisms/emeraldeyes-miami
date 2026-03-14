import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイアミヨットバチェロレッテパーティー | Emerald Eyes Miami",
  description:
    "最高のお別れパーティーの舞台。シャンパン、DJ、デコレーション、水上のインスタ映え写真。花嫁は最高のものを。$3,500から。",
  keywords: [
    "マイアミヨットバチェロレッテ",
    "マイアミボートバチェロレッテ"
  ],
  alternates: {
    canonical: "/ja/experiences/bachelorette-yacht-miami",
    languages: { en: "/experiences/bachelorette-yacht-miami", es: "/es/experiences/bachelorette-yacht-miami", pt: "/pt/experiences/bachelorette-yacht-miami", de: "/de/experiences/bachelorette-yacht-miami", fr: "/fr/experiences/bachelorette-yacht-miami", zh: "/zh/experiences/bachelorette-yacht-miami", ja: "/ja/experiences/bachelorette-yacht-miami" },
  },
  openGraph: {
    title: "マイアミヨットバチェロレッテパーティー | Emerald Eyes Miami",
    description:
      "シャンパン、DJ、デコレーション、水上バチェロレッテパーティーの完璧な舞台。",
    url: "/ja/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ヨットバチェロレッテパーティー — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミヨットバチェロレッテパーティー | Emerald Eyes Miami",
    description:
      "シャンパン、DJ、デコレーション、水上バチェロレッテパーティーの完璧な舞台。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
