import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haulover沙洲：完整游艇包船指南 | Emerald Eyes Miami",
  description:
    "关于乘游艇包船游览Haulover沙洲的一切信息。",
  keywords: [
    "Haulover沙洲游艇包船",
    "迈阿密沙洲"
  ],
  alternates: {
    canonical: "/zh/blog/haulover-sandbar-yacht-charter-miami",
    languages: { en: "/blog/haulover-sandbar-yacht-charter-miami", es: "/es/blog/haulover-sandbar-yacht-charter-miami", pt: "/pt/blog/haulover-sandbar-yacht-charter-miami", de: "/de/blog/haulover-sandbar-yacht-charter-miami", fr: "/fr/blog/haulover-sandbar-yacht-charter-miami", zh: "/zh/blog/haulover-sandbar-yacht-charter-miami", ja: "/ja/blog/haulover-sandbar-yacht-charter-miami" },
  },
  openGraph: {
    title:
      "Haulover沙洲：完整游艇包船指南 | Emerald Eyes Miami",
    description:
      "关于乘游艇包船游览Haulover沙洲的一切信息。",
    url: "/zh/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover沙洲：完整游艇包船指南 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haulover沙洲：完整游艇包船指南 | Emerald Eyes Miami",
    description:
      "关于乘游艇包船游览Haulover沙洲的一切信息。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
