import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerdev.space",
  integrations: [mdx(), sitemap()],

  build: {
    rollupOptions: {
      external: ["@astro/types"], // Add "@astro/types" to the external modules
    },
  },
});
