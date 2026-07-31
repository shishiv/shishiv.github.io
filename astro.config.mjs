// @ts-check
import { defineConfig } from "astro/config";

// site de usuário do github pages: publica na raiz de shishiv.github.io.
// se um dia virar site de projeto, `base` passa a ser "/nome-do-repo".
export default defineConfig({
  site: "https://shishiv.github.io",
  base: "/",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
