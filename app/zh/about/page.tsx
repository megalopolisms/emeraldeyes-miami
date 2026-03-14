import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | Emerald Eyes Miami",
  description:
    "成立于北迈阿密。从佛罗里达海峡精选的高端游艇体验。不张扬的奢华，每个细节都经过精心打造。",
  keywords: [
    "关于Emerald Eyes Miami",
    "迈阿密游艇公司",
    "北迈阿密船只租赁"
  ],
  alternates: {
    canonical: "/zh/about",
    languages: { en: "/about", es: "/es/about", pt: "/pt/about", de: "/de/about", fr: "/fr/about", zh: "/zh/about", ja: "/ja/about" },
  },
  openGraph: {
    title: "关于我们 | Emerald Eyes Miami",
    description:
      "成立于北迈阿密。从佛罗里达海峡精选的高端游艇体验。不张扬的奢华，每个细节都经过精心打造。",
    url: "/zh/about",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "关于我们 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于我们 | Emerald Eyes Miami",
    description:
      "成立于北迈阿密。从佛罗里达海峡精选的高端游艇体验。不张扬的奢华，每个细节都经过精心打造。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/about/page";
