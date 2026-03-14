import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Primera Vez Alquilando un Yate en Miami: Guia Completa | Emerald Eyes Miami",
  description:
    "Todo lo que necesita saber para su primer alquiler de yate en Miami. Que esperar, que llevar, etiqueta, errores comunes y como reservar el charter perfecto.",
  keywords: [
    "primer alquiler yate Miami",
    "primera vez charter yate",
    "guia principiante yate Miami",
    "consejos alquiler barco Miami",
  ],
  alternates: {
    canonical: "/es/blog/first-time-yacht-rental-miami",
    languages: {
      en: "/blog/first-time-yacht-rental-miami",
      es: "/es/blog/first-time-yacht-rental-miami",
    },
  },
  openGraph: {
    title: "Primera Vez Alquilando un Yate en Miami: Guia Completa",
    description:
      "La guia completa para su primer alquiler de yate en Miami. Que esperar, que llevar y como reservar.",
    url: "/es/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Primera vez alquilando yate Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primera Vez Alquilando un Yate en Miami: Guia Completa",
    description:
      "Todo lo que necesita saber para su primer alquiler de yate en Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
