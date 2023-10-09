// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: false,
    layoutTransition: false,
  },

  sourcemap: {
    server: true,
    client: true,
  },

  externalVue: true,
  vue: {
    compilerOptions: {
      hoistStatic: false,
    },
  },
});
