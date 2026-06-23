// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// `site` powers sitemap URLs, canonical links and absolute Open Graph paths.
export default defineConfig({
  site: "https://pinkha.app",

  // English is the default locale, served at the root (`/`). French lives
  // under `/fr/`. `prefixDefaultLocale: false` keeps EN URLs prefix-free.
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      // Emit <xhtml:link rel="alternate" hreflang> pairs in the sitemap.
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr" },
      },
    }),
  ],
});
