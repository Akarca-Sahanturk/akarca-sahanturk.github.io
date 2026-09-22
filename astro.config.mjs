import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://akarca-sahanturk.github.io',
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    routing: { prefixDefaultLocale: false },
  },
});
