import type { APIRoute } from "astro";
import { projectSlugs } from "@/content";
import { locales } from "@/lib/i18n";

const pageSlugs = [
  "",
  "about",
  "work",
  "skills",
  "certifications",
  "contact",
  "projects",
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://trejodev.com");
  const paths = locales.flatMap((locale) => [
    ...pageSlugs.map((slug) => `/${locale}${slug ? `/${slug}` : ""}`),
    ...projectSlugs.map((slug) => `/${locale}/projects/${slug}`),
  ]);
  const urls = paths
    .map((path) => `<url><loc>${new URL(path, origin)}</loc></url>`)
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    },
  );
};
