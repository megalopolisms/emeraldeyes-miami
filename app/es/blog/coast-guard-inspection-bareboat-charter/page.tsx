import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Que Pasa Durante una Inspeccion de la Guardia Costera en un Bareboat Charter? | Emerald Eyes Miami",
  description:
    "Guia completa sobre abordajes de la Guardia Costera en charters bareboat de yate en Miami. Que revisa la USCG, que documentos necesita, requisitos de equipo de seguridad y como pasar cada vez.",
  keywords: [
    "inspeccion Guardia Costera",
    "bareboat charter Miami",
    "abordaje USCG",
    "seguridad alquiler yate",
    "reglas charter yate Miami",
  ],
  alternates: {
    canonical: "/es/blog/coast-guard-inspection-bareboat-charter",
    languages: {
      en: "/blog/coast-guard-inspection-bareboat-charter",
      es: "/es/blog/coast-guard-inspection-bareboat-charter",
      pt: "/pt/blog/coast-guard-inspection-bareboat-charter",
      de: "/de/blog/coast-guard-inspection-bareboat-charter",
      fr: "/fr/blog/coast-guard-inspection-bareboat-charter",
      zh: "/zh/blog/coast-guard-inspection-bareboat-charter",
      ja: "/ja/blog/coast-guard-inspection-bareboat-charter",
    },
  },
  openGraph: {
    title:
      "Que Pasa Durante una Inspeccion de la Guardia Costera en un Bareboat Charter?",
    description:
      "Todo lo que necesita saber sobre abordajes de la USCG en charters bareboat en el sur de Florida.",
    url: "/es/blog/coast-guard-inspection-bareboat-charter",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/sax.jpg",
        width: 784,
        height: 1168,
        alt: "Inspeccion Guardia Costera Bareboat Charter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Que Pasa Durante una Inspeccion de la Guardia Costera en un Bareboat Charter?",
    description:
      "Todo lo que necesita saber sobre abordajes de la USCG en charters bareboat.",
    images: ["/images/sax.jpg"],
  },
};

export { default } from "@/app/blog/coast-guard-inspection-bareboat-charter/page";
