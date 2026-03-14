import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charter Corporativo de Yate Miami | Emerald Eyes Miami",
  description:
    "Impresione sin decir una palabra. Eventos ejecutivos en el agua, entretenimiento de clientes y reuniones con mejor vista. Nosotros manejamos todo. Desde $5,000.",
  keywords: [
    "charter corporativo yate Miami",
    "evento empresarial barco Miami",
    "team building yate Miami",
    "evento corporativo Miami",
  ],
  alternates: {
    canonical: "/es/experiences/corporate-yacht-charter-miami",
    languages: {
      en: "/experiences/corporate-yacht-charter-miami",
      es: "/es/experiences/corporate-yacht-charter-miami",
    },
  },
  openGraph: {
    title: "Charter Corporativo de Yate Miami | Emerald Eyes Miami",
    description:
      "Eventos de equipo, entretenimiento de clientes y reuniones ejecutivas en el agua en Miami.",
    url: "/es/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Charter corporativo de yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Corporativo de Yate Miami | Emerald Eyes Miami",
    description:
      "Eventos ejecutivos, team building y entretenimiento de clientes en el agua.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
