import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria | Emerald Eyes Miami",
  description:
    "Vea lo que le espera en el agua. Cruceros al atardecer, montajes de champan, vibraciones en el banco de arena y celebraciones en yates privados en Miami.",
  keywords: [
    "galeria yate Miami",
    "fotos interior yate Miami",
    "fotos crucero atardecer",
    "imagenes fiesta yate",
    "galeria alquiler barco",
  ],
  alternates: {
    canonical: "/es/gallery",
    languages: { en: "/gallery", es: "/es/gallery" },
  },
  openGraph: {
    title: "Galeria de Fotos | Emerald Eyes Miami",
    description:
      "Hora dorada, champan, vistas al oceano y el skyline de Miami. Vea como sera su charter.",
    url: "/es/gallery",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Galeria de charters de yate Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria de Fotos | Emerald Eyes Miami",
    description:
      "Hora dorada, champan, vistas al oceano y el skyline de Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
