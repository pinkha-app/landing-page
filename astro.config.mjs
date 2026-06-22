// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// `site` powers sitemap URLs, canonical links and absolute Open Graph paths.
export default defineConfig({
  site: "https://pinkha.app",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
