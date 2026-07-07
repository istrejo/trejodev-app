import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes
      .filter((route) => route.nav)
      .map((route) => ({
        url: canonicalUrl(locale, route.key),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route.key === "home" ? 1 : 0.7,
      })),
  );
}
