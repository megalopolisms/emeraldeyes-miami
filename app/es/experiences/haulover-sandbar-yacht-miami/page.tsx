import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haulover Sandbar en Yate Miami | Emerald Eyes Miami",
  description:
    "La fiesta en el banco de arena mas famosa de Miami. Ancle en Haulover Sandbar, nade en aguas turquesa y disfrute con su grupo. Desde $2,500.",
  keywords: [
    "Haulover Sandbar yate Miami",
    "banco de arena Miami",
    "fiesta sandbar Miami",
    "alquiler barco Haulover",
  ],
  alternates: {
    canonical: "/es/experiences/haulover-sandbar-yacht-miami",
    languages: {
      en: "/experiences/haulover-sandbar-yacht-miami",
      es: "/es/experiences/haulover-sandbar-yacht-miami",
    },
  },
  openGraph: {
    title: "Haulover Sandbar en Yate Miami | Emerald Eyes Miami",
    description:
      "La fiesta en el banco de arena mas famosa de Miami. Ancle, nade y disfrute con su grupo.",
    url: "/es/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar en yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar en Yate Miami | Emerald Eyes Miami",
    description:
      "La fiesta en el banco de arena mas famosa de Miami. Ancle, nade y disfrute.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
