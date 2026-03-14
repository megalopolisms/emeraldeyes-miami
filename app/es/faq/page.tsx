import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes sobre Charter de Yate en Miami | Emerald Eyes Miami",
  description:
    "Respuestas a preguntas comunes sobre charters de Emerald Eyes Miami, incluyendo salidas, que esta incluido, clima, depositos, fotografos y transporte.",
  keywords: [
    "preguntas frecuentes charter yate",
    "reglas alquiler barco Miami",
    "que llevar al yate",
    "politica de clima yate",
    "FAQ Emerald Eyes Miami",
  ],
  alternates: {
    canonical: "/es/faq",
    languages: { en: "/faq", es: "/es/faq" },
  },
  openGraph: {
    title: "Preguntas Frecuentes Charter de Yate Miami | Emerald Eyes Miami",
    description:
      "Lea las preguntas frecuentes sobre charters de Emerald Eyes Miami sobre planificacion, que incluye, salidas y extras antes de reservar.",
    url: "/es/faq",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Preguntas frecuentes charter yate Miami — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes Charter de Yate Miami | Emerald Eyes Miami",
    description:
      "Respuestas a preguntas comunes sobre charters de Emerald Eyes Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Donde salen los charters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos los charters salen de nuestra marina asociada en el area de North Miami. Los detalles exactos de la marina y las direcciones se proporcionan una vez que se finaliza su reserva.",
      },
    },
    {
      "@type": "Question",
      name: "Que esta incluido en el precio del charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada charter incluye un capitan con licencia, tripulacion profesional, combustible, amenidades basicas, agua embotellada, hielo y acceso al sistema de sonido. Extras como fotografia, DJ, chef de sushi, servicio de botellas y transporte estan disponibles por separado.",
      },
    },
    {
      "@type": "Question",
      name: "Podemos llevar nuestra propia comida y bebidas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Puede traer su propia comida y bebidas. Si desea una experiencia sin preocupaciones, podemos coordinar catering y servicio de botellas curado.",
      },
    },
    {
      "@type": "Question",
      name: "Proporcionan un capitan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Los capitanes y la tripulacion estan incluidos para que pueda concentrarse en la experiencia en lugar de la logistica.",
      },
    },
    {
      "@type": "Question",
      name: "Que pasa si el clima cambia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monitoreamos las condiciones de cerca antes de cada charter. Si el clima hace inseguro salir, le ayudaremos a reprogramar o revisar opciones de reembolso segun los terminos de la reserva.",
      },
    },
  ],
};

export default function FAQPageES() {
  return (
    <>
      <Script
        id="faq-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
