// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      bodyAttrs: {
        class: "bg-zinc-900 text-white font-semibold font-mono"
      }
    }
  }
})