import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.luis-backt-und-kocht.de',
  integrations: [tailwind(), mdx(), preact(), react()],
});
