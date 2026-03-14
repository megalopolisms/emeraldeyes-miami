import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria | Emerald Eyes Miami",
  description:
    "Veja o que espera por você na água. Cruzeiros ao pôr do sol, montagens de champanhe, vibrações no banco de areia e celebrações em iates privados em Miami.",
  keywords: [
    "galeria iate Miami",
    "fotos interior iate Miami",
    "fotos cruzeiro pôr do sol"
  ],
  alternates: {
    canonical: "/pt/gallery",
    languages: { en: "/gallery", es: "/es/gallery", pt: "/pt/gallery", de: "/de/gallery", fr: "/fr/gallery", zh: "/zh/gallery", ja: "/ja/gallery" },
  },
  openGraph: {
    title: "Galeria | Emerald Eyes Miami",
    description:
      "Veja o que espera por você na água. Cruzeiros ao pôr do sol, montagens de champanhe, vibrações no banco de areia e celebrações em iates privados em Miami.",
    url: "/pt/gallery",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Galeria | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria | Emerald Eyes Miami",
    description:
      "Veja o que espera por você na água. Cruzeiros ao pôr do sol, montagens de champanhe, vibrações no banco de areia e celebrações em iates privados em Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
