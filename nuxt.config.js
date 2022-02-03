export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  dev: process.env.NODE_ENV !== "production",

  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },

  storybook: {
    port: 4000,
    stories: ["~/components/**/*.stories.js"],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "flywheel",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/components", "~/plugins/wicg-inert.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.STORYBLOK_API_KEY,
        cacheProvider: "memory",
      },
    ],
    "portal-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
