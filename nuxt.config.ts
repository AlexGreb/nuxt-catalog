// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST,
    }
  },
  app: {
    head: {
      title: 'MODO',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  css: ['~/assets/css/global.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  svgoLoader: {
    namespaces: [
      {
        prefix: 'icon',
        dir: './public/icons',
      },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-svgo-loader', '@pinia/nuxt']
})
