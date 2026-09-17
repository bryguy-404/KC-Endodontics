import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const relatedLink = z.object({
  title: z.string(),
  href: z.string(),
  description: z.string(),
});

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    heading: z.string().optional(),
    metaTitle: z.string().optional(),
    description: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    template: z.enum(["hub", "treatment", "article", "landing"]),
    urgent: z.boolean().default(false),
    urgentText: z.string().optional(),
    sidebarText: z.string().optional(),
    closingTitle: z.string().optional(),
    closingText: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    sourceUrl: z.url(),
    related: z.array(relatedLink).default([]),
  }),
});

export const collections = { pages };
