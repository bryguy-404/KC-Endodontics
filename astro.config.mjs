// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { sites } from '@openai/sites-vite-plugin';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kcendodontics.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss(), sites()]
  },

  integrations: [mdx()]
});
