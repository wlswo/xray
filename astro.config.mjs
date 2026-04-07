import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wlswo.me',
  base: '/xray/',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
