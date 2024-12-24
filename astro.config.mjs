// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://soft-pixie-bf1e3d.netlify.app/",
  integrations: [preact()]
});