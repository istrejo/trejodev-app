import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://trejodev.web.app",
  output: "static",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
