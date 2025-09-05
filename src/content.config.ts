import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      link: z.string().optional(),
      screenshots: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        })
      ),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      coverImage: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      pubDate: z.date(),
    }),
});

export const collections = {
  portfolio: portfolioCollection,
  blog: blogCollection,
};
