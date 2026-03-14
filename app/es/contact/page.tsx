import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contacto Emerald Eyes Miami | Charters de Yate en North Miami",
  description:
    "Contacte a Emerald Eyes Miami para preguntas sobre charters, solicitudes personalizadas y soporte de planificacion para experiencias de yate en North Miami y Biscayne Bay.",
  keywords: [
    "contacto Emerald Eyes Miami",
    "contacto alquiler yate Miami",
    "reservar yate North Miami",
    "telefono charter yate Miami",
  ],
  alternates: {
    canonical: "/es/contact",
    languages: {
      en: "/contact",
      es: "/es/contact",
      pt: "/pt/contact",
      de: "/de/contact",
      fr: "/fr/contact",
      zh: "/zh/contact",
      ja: "/ja/contact",
    },
  },
  openGraph: {
    title: "Contacto Emerald Eyes Miami | Charters de Yate en North Miami",
    description:
      "Comuniquese con el equipo de Emerald Eyes Miami para planificacion de charters, propuestas, eventos y experiencias personalizadas de yate.",
    url: "/es/contact",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Contacto Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto Emerald Eyes Miami | Charters de Yate en North Miami",
    description:
      "Comuniquese con el equipo de Emerald Eyes Miami para planificacion de charters y experiencias personalizadas.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPageES() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
