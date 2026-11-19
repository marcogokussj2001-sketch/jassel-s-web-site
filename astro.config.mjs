// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// DEPLOY_TARGET=cloudflare → served from the domain root on Cloudflare Pages.
// Default → GitHub Pages: https://marcogokussj2001-sketch.github.io/jassel-s-web-site/
const isCloudflare = process.env.DEPLOY_TARGET === 'cloudflare';

// https://astro.build/config
export default defineConfig({
  site: isCloudflare ? 'https://jassel-s-web-site.pages.dev' : 'https://marcogokussj2001-sketch.github.io',
  base: isCloudflare ? '/' : '/jassel-s-web-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
