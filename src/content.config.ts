import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      heroImage: z.string().optional(),
      heroAlt: z.string().optional(),
    })
    .refine((entry) => !entry.heroImage || Boolean(entry.heroAlt), {
      message: "heroAlt is required when heroImage is provided.",
      path: ["heroAlt"],
    }),
});

const analysis = defineCollection({
  loader: glob({ base: "./src/content/analysis", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    series: z.string().default("Introduction to Analysis"),
    order: z.number().int().nonnegative().default(0),
  }),
});

export const collections = { blog, analysis };
