export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/solid.min.js"
      },
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      },
      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity:
          "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity:
          "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/resume.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~plugins/swiper.js", ssr: false },
    { src: "~/plugins/vueTyper.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/color-mode"],
  styleResources: {
    // your settings here
    scss: ["'./assets/scss/*.scss'", "./assets/scss/resume.scss"]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        /* module options */
      }
    ],

    ["@nuxtjs/style-resources"]
  ],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./locales/en.json"),
        es: require("./locales/es.json")
      }
    }
  },
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === "vue-loader"
        );
        const {
          options: { loaders }
        } = vueLoader || { options: {} };
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            //changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }
        //config.module.rules.forEach(rule => changeLoaderOptions(rule.use));
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  }
};

