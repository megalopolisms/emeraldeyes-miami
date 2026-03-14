import type { Metadata } from "next";
import AboutPage from "@/app/about/page";

export const metadata: Metadata = {
  title: "Nosotros | Emerald Eyes Miami",
  description:
    "Fundada en North Miami. Experiencias premium de yate curadas desde el Estrecho de Florida. Lujo sin pretension, cada detalle cuidado.",
  keywords: [
    "sobre Emerald Eyes Miami",
    "empresa de yates Miami",
    "alquiler barco North Miami",
    "tripulacion yate Miami",
    "experiencias yate de lujo",
  ],
  alternates: {
    canonical: "/es/about",
    languages: { en: "/about", es: "/es/about" },
  },
  openGraph: {
    title: "Sobre Emerald Eyes Miami",
    description:
      "Construida por personas que viven en el agua. Experiencias de yate de lujo desde North Miami, FL.",
    url: "/es/about",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Sobre Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Emerald Eyes Miami",
    description:
      "Construida por personas que viven en el agua. Experiencias de yate de lujo desde North Miami, FL.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { AboutPage as default };
