// @ts-check
import { defineConfig } from "astro/config";

// github pages. troque `base` para "/" se um dia virar shishiv.github.io na raiz.
export default defineConfig({
  site: "https://shishiv.github.io",
  base: "/portfolio",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
