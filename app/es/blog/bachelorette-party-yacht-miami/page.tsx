import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Despedida de Soltera en Yate en Miami: Guia Completa | Emerald Eyes Miami",
  description:
    "Planifique la despedida de soltera perfecta en un yate en Miami. Paquetes, precios, que incluye, mejores rutas, extras como DJ y fotografo, y como reservar.",
  keywords: [
    "despedida soltera yate Miami",
    "bachelorette party barco Miami",
    "fiesta despedida soltera Miami",
    "yate despedida Miami",
  ],
  alternates: {
    canonical: "/es/blog/bachelorette-party-yacht-miami",
    languages: {
      en: "/blog/bachelorette-party-yacht-miami",
      es: "/es/blog/bachelorette-party-yacht-miami",
    },
  },
  openGraph: {
    title: "Despedida de Soltera en Yate en Miami: Guia Completa",
    description:
      "La guia definitiva para planificar una despedida de soltera en yate en Miami.",
    url: "/es/blog/bachelorette-party-yacht-miami",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Despedida de soltera yate Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despedida de Soltera en Yate en Miami: Guia Completa",
    description:
      "Planifique la despedida de soltera perfecta en un yate en Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/bachelorette-party-yacht-miami/page";
