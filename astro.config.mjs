import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://tylerdev.space",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  prefetch: true,
});
