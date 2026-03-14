import { MetadataRoute } from "next";
import { BUSINESS, EXPERIENCES } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.siteUrl;

  const staticPages = [
    "",
    "/experiences",
    "/fleet",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/book",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const experiencePages = EXPERIENCES.map((exp) => ({
    url: `${baseUrl}/experiences/${exp.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages = [
    "/blog/coast-guard-inspection-bareboat-charter",
    "/blog/haulover-sandbar-yacht-charter-miami",
    "/blog/jet-ski-license-miami",
    "/blog/miami-yacht-charter-prices",
    "/blog/bachelorette-party-yacht-miami",
    "/blog/first-time-yacht-rental-miami",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalPages = ["/terms", "/privacy", "/cancellation-policy"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }),
  );

  return [...staticPages, ...experiencePages, ...blogPages, ...legalPages];
}
