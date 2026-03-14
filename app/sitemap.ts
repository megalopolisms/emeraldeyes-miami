import { MetadataRoute } from "next";
import {
  BUSINESS,
  EXPERIENCES,
  ROUTABLE_EXPERIENCE_SLUGS,
} from "@/lib/constants";

export const dynamic = "force-static";

function getDate(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

const I18N_LANGS = ["es", "pt", "de", "fr", "zh", "ja"] as const;

const staticPages = [
  {
    route: "",
    lastModified: "2026-03-14",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    route: "/experiences",
    lastModified: "2026-03-14",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    route: "/fleet",
    lastModified: "2026-03-14",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    route: "/gallery",
    lastModified: "2026-03-14",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    route: "/about",
    lastModified: "2026-03-14",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    route: "/faq",
    lastModified: "2026-03-14",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    route: "/contact",
    lastModified: "2026-03-14",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    route: "/book",
    lastModified: "2026-03-14",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    route: "/blog",
    lastModified: "2026-03-14",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    route: "/privacy",
    lastModified: "2026-03-14",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    route: "/terms",
    lastModified: "2026-03-14",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    route: "/cancellation-policy",
    lastModified: "2026-03-14",
    changeFrequency: "yearly" as const,
    priority: 0.2,
  },
];

const experienceSlugs = EXPERIENCES.filter((exp) =>
  ROUTABLE_EXPERIENCE_SLUGS.has(exp.slug),
).map((exp) => exp.slug);

const blogSlugs = [
  "coast-guard-inspection-bareboat-charter",
  "haulover-sandbar-yacht-charter-miami",
  "jet-ski-license-miami",
  "miami-yacht-charter-prices",
  "bachelorette-party-yacht-miami",
  "first-time-yacht-rental-miami",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.siteUrl;
  const entries: MetadataRoute.Sitemap = [];

  // English base pages
  for (const page of staticPages) {
    entries.push({
      url: `${baseUrl}${page.route}`,
      lastModified: getDate(page.lastModified),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // English experience pages
  for (const slug of experienceSlugs) {
    entries.push({
      url: `${baseUrl}/experiences/${slug}`,
      lastModified: getDate("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  // English blog pages
  for (const slug of blogSlugs) {
    entries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: getDate("2026-03-14"),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  // All i18n language versions (es, pt, de, fr, zh, ja)
  for (const lang of I18N_LANGS) {
    // Static pages per language
    for (const page of staticPages) {
      if (page.route === "/cancellation-policy") continue;
      const route = page.route ? `/${lang}${page.route}` : `/${lang}`;
      entries.push({
        url: `${baseUrl}${route}`,
        lastModified: getDate(page.lastModified),
        changeFrequency: page.route === "" ? "weekly" : "monthly",
        priority: page.route === "" ? 0.8 : 0.6,
      });
    }

    // Experience pages per language
    for (const slug of experienceSlugs) {
      entries.push({
        url: `${baseUrl}/${lang}/experiences/${slug}`,
        lastModified: getDate("2026-03-14"),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // Blog pages per language
    for (const slug of blogSlugs) {
      entries.push({
        url: `${baseUrl}/${lang}/blog/${slug}`,
        lastModified: getDate("2026-03-14"),
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  }

  return entries;
}
