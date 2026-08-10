// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production domain when you deploy (used for canonical
// URLs, Open Graph tags, sitemap and structured data).
export default defineConfig({
  site: 'https://philipsbek.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
