import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "迈阿密摩托艇驾照：您需要知道的一切 | Emerald Eyes Miami",
  description:
    "在迈阿密驾驶摩托艇需要驾照吗？完整要求指南。",
  keywords: [
    "迈阿密摩托艇驾照",
    "佛罗里达航行证书"
  ],
  alternates: {
    canonical: "/zh/blog/jet-ski-license-miami",
    languages: { en: "/blog/jet-ski-license-miami", es: "/es/blog/jet-ski-license-miami", pt: "/pt/blog/jet-ski-license-miami", de: "/de/blog/jet-ski-license-miami", fr: "/fr/blog/jet-ski-license-miami", zh: "/zh/blog/jet-ski-license-miami", ja: "/ja/blog/jet-ski-license-miami" },
  },
  openGraph: {
    title:
      "迈阿密摩托艇驾照：您需要知道的一切 | Emerald Eyes Miami",
    description:
      "在迈阿密驾驶摩托艇需要驾照吗？完整要求指南。",
    url: "/zh/blog/jet-ski-license-miami",
    type: "article",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "迈阿密摩托艇驾照：您需要知道的一切 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "迈阿密摩托艇驾照：您需要知道的一切 | Emerald Eyes Miami",
    description:
      "在迈阿密驾驶摩托艇需要驾照吗？完整要求指南。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
