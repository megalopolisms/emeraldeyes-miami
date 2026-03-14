import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Yachtparty Miami | Emerald Eyes Miami",
  description:
    "Ihr Boot. Ihre Regeln. Ihre Playlist. Geburtstage, Feiern oder einfach so. Soundsystem, Flaschenservice und Crew. Ab $3.500.",
  keywords: [
    "private Yachtparty Miami",
    "Bootsparty Miami"
  ],
  alternates: {
    canonical: "/de/experiences/private-party-yacht-miami",
    languages: { en: "/experiences/private-party-yacht-miami", es: "/es/experiences/private-party-yacht-miami", pt: "/pt/experiences/private-party-yacht-miami", de: "/de/experiences/private-party-yacht-miami", fr: "/fr/experiences/private-party-yacht-miami", zh: "/zh/experiences/private-party-yacht-miami", ja: "/ja/experiences/private-party-yacht-miami" },
  },
  openGraph: {
    title: "Private Yachtparty Miami | Emerald Eyes Miami",
    description:
      "Feiern auf dem Wasser. Soundsystem, Flaschenservice und eine Crew, die die perfekte Atmosphäre schafft.",
    url: "/de/experiences/private-party-yacht-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "Private Yachtparty — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Yachtparty Miami | Emerald Eyes Miami",
    description:
      "Feiern auf dem Wasser. Soundsystem, Flaschenservice und eine Crew, die die perfekte Atmosphäre schafft.",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
