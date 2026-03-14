import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias | Emerald Eyes Miami",
  description:
    "Cruceros al atardecer, fiestas privadas, charters corporativos, despedidas de soltera, propuestas y aventuras en Haulover Sandbar. Elija su experiencia perfecta de yate en Miami.",
  keywords: [
    "experiencias yate Miami",
    "paquetes charter barco Miami",
    "tours privados yate Miami",
    "despedida soltera barco Miami",
    "paquetes alquiler yate",
  ],
  alternates: {
    canonical: "/es/experiences",
    languages: { en: "/experiences", es: "/es/experiences" },
  },
  openGraph: {
    title: "Experiencias de Yate | Emerald Eyes Miami",
    description:
      "Cada charter es personalizado. Cruceros al atardecer, fiestas privadas, eventos corporativos y mas en el agua en Miami.",
    url: "/es/experiences",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Experiencias de yate en Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencias de Yate | Emerald Eyes Miami",
    description:
      "Cruceros al atardecer, fiestas privadas, charters corporativos, despedidas de soltera y aventuras en Haulover Sandbar.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
