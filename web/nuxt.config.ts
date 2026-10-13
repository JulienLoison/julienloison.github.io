// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        noUncheckedIndexedAccess: true,
      },
    },
  },
  app: {
    head: {
      title: 'Julien Loison - Développeur web',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
})
