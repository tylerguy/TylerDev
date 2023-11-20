import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerdev.space",
  integrations: [mdx(), sitemap(), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compress()],
  build: {
    rollupOptions: {
      external: ["@astro/types"] // Add "@astro/types" to the external modules
    }
  }
});