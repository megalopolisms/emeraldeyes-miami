import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haulover Sandbar: Guia Completo de Charter de Iate | Emerald Eyes Miami",
  description:
    "Tudo que você precisa saber sobre visitar o Haulover Sandbar em um charter de iate.",
  keywords: [
    "Haulover Sandbar charter iate",
    "banco areia Miami"
  ],
  alternates: {
    canonical: "/pt/blog/haulover-sandbar-yacht-charter-miami",
    languages: { en: "/blog/haulover-sandbar-yacht-charter-miami", es: "/es/blog/haulover-sandbar-yacht-charter-miami", pt: "/pt/blog/haulover-sandbar-yacht-charter-miami", de: "/de/blog/haulover-sandbar-yacht-charter-miami", fr: "/fr/blog/haulover-sandbar-yacht-charter-miami", zh: "/zh/blog/haulover-sandbar-yacht-charter-miami", ja: "/ja/blog/haulover-sandbar-yacht-charter-miami" },
  },
  openGraph: {
    title:
      "Haulover Sandbar: Guia Completo de Charter de Iate | Emerald Eyes Miami",
    description:
      "Tudo que você precisa saber sobre visitar o Haulover Sandbar em um charter de iate.",
    url: "/pt/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar: Guia Completo de Charter de Iate | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haulover Sandbar: Guia Completo de Charter de Iate | Emerald Eyes Miami",
    description:
      "Tudo que você precisa saber sobre visitar o Haulover Sandbar em um charter de iate.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
