import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haulover Sandbar em Iate Miami | Emerald Eyes Miami",
  description:
    "A festa no banco de areia mais famosa de Miami. Ancore no Haulover Sandbar, nade em águas turquesa e aproveite com seu grupo. A partir de $2.500.",
  keywords: [
    "Haulover Sandbar iate Miami",
    "banco de areia Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/haulover-sandbar-yacht-miami",
    languages: { en: "/experiences/haulover-sandbar-yacht-miami", es: "/es/experiences/haulover-sandbar-yacht-miami", pt: "/pt/experiences/haulover-sandbar-yacht-miami", de: "/de/experiences/haulover-sandbar-yacht-miami", fr: "/fr/experiences/haulover-sandbar-yacht-miami", zh: "/zh/experiences/haulover-sandbar-yacht-miami", ja: "/ja/experiences/haulover-sandbar-yacht-miami" },
  },
  openGraph: {
    title: "Haulover Sandbar em Iate Miami | Emerald Eyes Miami",
    description:
      "A festa no banco de areia mais famosa de Miami. Ancore, nade e aproveite.",
    url: "/pt/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar em iate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar em Iate Miami | Emerald Eyes Miami",
    description:
      "A festa no banco de areia mais famosa de Miami. Ancore, nade e aproveite.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
