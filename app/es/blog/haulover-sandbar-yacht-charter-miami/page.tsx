import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haulover Sandbar: Guia Completa de Charter de Yate | Emerald Eyes Miami",
  description:
    "Todo lo que necesita saber sobre visitar Haulover Sandbar en un charter de yate. Mejor hora, que llevar, mapa, y como reservar el viaje perfecto al banco de arena.",
  keywords: [
    "Haulover Sandbar charter yate",
    "banco de arena Miami",
    "Haulover Sandbar barco",
    "guia Haulover Sandbar",
  ],
  alternates: {
    canonical: "/es/blog/haulover-sandbar-yacht-charter-miami",
    languages: {
      en: "/blog/haulover-sandbar-yacht-charter-miami",
      es: "/es/blog/haulover-sandbar-yacht-charter-miami",
    },
  },
  openGraph: {
    title: "Haulover Sandbar: Guia Completa de Charter de Yate",
    description:
      "La guia definitiva para visitar Haulover Sandbar en un charter de yate en Miami.",
    url: "/es/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar charter yate Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar: Guia Completa de Charter de Yate",
    description:
      "La guia definitiva para visitar Haulover Sandbar en un charter de yate.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
