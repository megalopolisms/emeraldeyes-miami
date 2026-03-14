import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns | Emerald Eyes Miami",
  description:
    "Gegründet in North Miami. Premium-Yacht-Erlebnisse aus der Straße von Florida. Luxus ohne Angeberei, jedes Detail durchdacht.",
  keywords: [
    "über Emerald Eyes Miami",
    "Yachtunternehmen Miami",
    "Bootsvermietung North Miami"
  ],
  alternates: {
    canonical: "/de/about",
    languages: { en: "/about", es: "/es/about", pt: "/pt/about", de: "/de/about", fr: "/fr/about", zh: "/zh/about", ja: "/ja/about" },
  },
  openGraph: {
    title: "Über Uns | Emerald Eyes Miami",
    description:
      "Gegründet in North Miami. Premium-Yacht-Erlebnisse aus der Straße von Florida. Luxus ohne Angeberei, jedes Detail durchdacht.",
    url: "/de/about",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Über Uns | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Uns | Emerald Eyes Miami",
    description:
      "Gegründet in North Miami. Premium-Yacht-Erlebnisse aus der Straße von Florida. Luxus ohne Angeberei, jedes Detail durchdacht.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/about/page";
