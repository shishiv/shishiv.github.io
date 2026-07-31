import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * posts. é aqui que mora o que saiu da fita: extensão universitária,
 * iniciação científica, notas de arquitetura, registro de build in public.
 * a fita carrega evento substancial; o post carrega o resto.
 */
const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["pt", "en"]).default("pt"),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
