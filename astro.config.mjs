import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://tylerdev.space",
  integrations: [mdx(), sitemap(), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compress()],
 // output: 'hybrid',
/*  adapter: vercel({
    edgeMiddleware: true,
  }), */
});
