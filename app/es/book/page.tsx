import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Reserve un Charter de Yate en North Miami | Emerald Eyes Miami",
  description:
    "Use el planificador de Emerald Eyes Miami para armar su charter en minutos. Cruceros al atardecer, fiestas privadas, propuestas, despedidas y experiencias personalizadas desde North Miami.",
  keywords: [
    "reservar yate Miami",
    "alquilar barco North Miami",
    "reservar charter de yate Miami",
    "reserva de yate Miami",
  ],
  alternates: {
    canonical: "/es/book",
    languages: {
      en: "/book",
      es: "/es/book",
      pt: "/pt/book",
      de: "/de/book",
      fr: "/fr/book",
      zh: "/zh/book",
      ja: "/ja/book",
    },
  },
  openGraph: {
    title: "Reserve un Charter de Yate en North Miami | Emerald Eyes Miami",
    description:
      "Planifique su charter de yate en Miami con nuestro planificador interactivo y seguimiento rapido del equipo de Emerald Eyes.",
    url: "/es/book",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Reserve un charter de yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve un Charter de Yate en North Miami | Emerald Eyes Miami",
    description:
      "Planifique su charter de yate en Miami con nuestro planificador interactivo.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPageES() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
