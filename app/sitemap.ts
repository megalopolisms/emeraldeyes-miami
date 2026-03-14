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
    route: "/cancellation-policy",
    lastModified: "2026-03-14",
    changeFrequency: "yearly" as const,
    priority: 0.2,
  },
];

const experiencePages = EXPERIENCES.filter((exp) =>
  ROUTABLE_EXPERIENCE_SLUGS.has(exp.slug),
).map((exp) => ({
  url: `${BUSINESS.siteUrl}/experiences/${exp.slug}`,
  lastModified: getDate("2026-03-14"),
  changeFrequency: "monthly" as const,
  priority: 0.85,
}));

const blogPages = [
  {
    route: "/blog/coast-guard-inspection-bareboat-charter",
    lastModified: "2026-03-13",
  },
  {
    route: "/blog/haulover-sandbar-yacht-charter-miami",
    lastModified: "2026-03-14",
  },
  {
    route: "/blog/jet-ski-license-miami",
    lastModified: "2026-03-14",
  },
  {
    route: "/blog/miami-yacht-charter-prices",
    lastModified: "2026-03-14",
  },
  {
    route: "/blog/bachelorette-party-yacht-miami",
    lastModified: "2026-03-14",
  },
  {
    route: "/blog/first-time-yacht-rental-miami",
    lastModified: "2026-03-14",
  },
].map((page) => ({
  url: `${BUSINESS.siteUrl}${page.route}`,
  lastModified: getDate(page.lastModified),
  changeFrequency: "monthly" as const,
  priority: 0.75,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.siteUrl;

  const basePages = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: getDate(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...basePages, ...experiencePages, ...blogPages];
}
