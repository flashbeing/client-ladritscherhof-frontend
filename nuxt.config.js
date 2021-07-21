export default {
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Ladritscherhof',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#14003c' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/actions.css',
    '@/assets/css/mptec.css',
    '@/assets/css/column-layout.css',
    '@/assets/css/animations.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/google-maps',
    '@/plugins/vue-svgicon',
    // '@/plugins/excel-downloader',
    // { src: '@/plugins/vue-datepicker', ssr: false },
    // { src: '@/plugins/vue-notification', ssr: false },
    '@/plugins/i18n',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/redirect-module',
    // '@nuxtjs/apollo',
    /*
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['account'],
      },
    ], */
    // 'cookie-universal-nuxt',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  purgeCSS: {
    whitelistPatterns: [
      /current/,
      /svg/,
      /page-enter-active/,
      /page-leave-active/,
      /page-enter/,
      /slide-left-enter/,
      /slide-right-leave-active/,
      /slide-left-leave-active/,
      /slide-right-enter/,
      /zoom-page-enter/,
      /zoom-page-leave-active/,
      /pre-show/,
      /animate-show/,
    ],
  },

  generate: {
    routes: ['/de', '/menu'],
  },

  pageTransition: 'zoom-page',

  router: {
    linkActiveClass: 'active_page',
    linkExactActiveClass: 'current_page',
    middleware: ['i18n'],
  },

  env: {
    GOOGLE_MAPS_API_KEY: 'AIzaSyDjc1PxyB0aTXAnO5XfWGud5fPoNGNSRO4',
  },

  redirect: [{ from: '^/menu', to: '/pdf/menu.pdf' }],
};
