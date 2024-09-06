import routes from './routes.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon'],

  ssr: true,

  nitro: {
    preset: 'node-server',
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },

  image: {
    formats: ['avif', 'webp', 'jpeg', 'png'],
    quality: 100,
  },

  tailwindcss: {
    cssPath: '~/assets/css/app.pcss',
  },

  i18n: {
    vueI18n: './i18n.config.js',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-BE',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'nl',
        name: 'Nederlands',
        iso: 'nl-NL',
      },
    ],
    customRoutes: 'config',
    pages: routes,
    defaultLocale: 'fr',
    strategy: 'prefix',
    // baseUrl: 'https://production.com',
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-slide', 'swiper-container'].includes(tag),
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
