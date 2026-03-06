// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ornate-tarsier-7f9a9a.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
