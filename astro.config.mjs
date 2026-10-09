// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://balaji-a.netlify.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});