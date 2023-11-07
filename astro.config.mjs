import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerdev.space",
  integrations: [mdx(), sitemap()],
  load: {
    // Include necessary Astro dependencies here
    include: ["@astro/types", /* other dependencies */],
  },
});
