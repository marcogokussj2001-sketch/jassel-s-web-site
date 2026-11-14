// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://marcogokussj2001-sketch.github.io/jassel-s-web-site/
  site: 'https://marcogokussj2001-sketch.github.io',
  base: '/jassel-s-web-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
