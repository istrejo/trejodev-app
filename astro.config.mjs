import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://trejodev.com",
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/about": "/en/about",
    "/experience": "/en/work",
    "/work": "/en/work",
    "/skills": "/en/skills",
    "/certifications": "/en/certifications",
    "/contact": "/en/contact",
    "/projects": "/en/projects",
    "/projects/racerlab": "/en/projects/racerlab",
    "/en/experience": "/en/work",
    "/es/experience": "/es/work",
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
