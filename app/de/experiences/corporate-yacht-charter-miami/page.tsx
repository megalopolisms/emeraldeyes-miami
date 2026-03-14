import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firmenyachtcharter Miami | Emerald Eyes Miami",
  description:
    "Beeindrucken Sie ohne Worte. Executive-Events auf dem Wasser, Kundenunterhaltung und Meetings mit bester Aussicht. Wir kümmern uns um alles. Ab $5.000.",
  keywords: [
    "Firmenyachtcharter Miami",
    "Firmenveranstaltung Boot Miami"
  ],
  alternates: {
    canonical: "/de/experiences/corporate-yacht-charter-miami",
    languages: { en: "/experiences/corporate-yacht-charter-miami", es: "/es/experiences/corporate-yacht-charter-miami", pt: "/pt/experiences/corporate-yacht-charter-miami", de: "/de/experiences/corporate-yacht-charter-miami", fr: "/fr/experiences/corporate-yacht-charter-miami", zh: "/zh/experiences/corporate-yacht-charter-miami", ja: "/ja/experiences/corporate-yacht-charter-miami" },
  },
  openGraph: {
    title: "Firmenyachtcharter Miami | Emerald Eyes Miami",
    description:
      "Teamevents, Kundenunterhaltung und Executive-Meetings auf dem Wasser in Miami.",
    url: "/de/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Firmenyachtcharter — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmenyachtcharter Miami | Emerald Eyes Miami",
    description:
      "Teamevents, Kundenunterhaltung und Executive-Meetings auf dem Wasser in Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
