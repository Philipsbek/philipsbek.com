// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production domain when you deploy (used for canonical
// URLs, Open Graph tags, sitemap and structured data).
export default defineConfig({
  site: 'https://philipsbek.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Honor the PORT env var (used by the preview tooling's autoPort) so the
  // dev/preview server binds the assigned port instead of defaulting to 4321.
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  build: {
    format: 'directory',
  },
});
