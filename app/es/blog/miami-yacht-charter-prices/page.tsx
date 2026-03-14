import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Precios de Charter de Yate en Miami: Guia Completa 2026 | Emerald Eyes Miami",
  description:
    "Cuanto cuesta alquilar un yate en Miami? Guia de precios detallada con rangos por tamano de embarcacion, duracion, extras y consejos para obtener el mejor valor.",
  keywords: [
    "precios charter yate Miami",
    "cuanto cuesta alquilar yate Miami",
    "costo alquiler barco Miami",
    "precios yate Miami 2026",
  ],
  alternates: {
    canonical: "/es/blog/miami-yacht-charter-prices",
    languages: {
      en: "/blog/miami-yacht-charter-prices",
      es: "/es/blog/miami-yacht-charter-prices",
      pt: "/pt/blog/miami-yacht-charter-prices",
      de: "/de/blog/miami-yacht-charter-prices",
      fr: "/fr/blog/miami-yacht-charter-prices",
      zh: "/zh/blog/miami-yacht-charter-prices",
      ja: "/ja/blog/miami-yacht-charter-prices",
    },
  },
  openGraph: {
    title: "Precios de Charter de Yate en Miami: Guia Completa 2026",
    description:
      "Guia de precios detallada para charters de yate en Miami. Rangos por tamano, duracion y extras.",
    url: "/es/blog/miami-yacht-charter-prices",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Precios charter yate Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios de Charter de Yate en Miami: Guia Completa 2026",
    description:
      "Cuanto cuesta alquilar un yate en Miami? Guia detallada de precios 2026.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/miami-yacht-charter-prices/page";
