import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      link: z.string(),
      screenshots: z.array(
        z.object({
          url: z.string(),
          alt: z.string(),
        })
      ),
    }),
});

export const collections = {
  portfolio: portfolioCollection,
};
