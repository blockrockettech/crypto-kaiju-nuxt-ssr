module.exports = {
  debug: true,

  /*
   ** Headers of the page
   */
  head: {
    title: "CryptoKaiju Explorer",

    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        name: "keywords",
        content: "erc721, ethereum, blockchain, crypto, kaiju"
      },
      {
        name: "title",
        content: "CryptoKaiju dApp - Ethereum Powered Vinyl Kaiju Toys | Non Fungible Sofubi"
      },
      {
        name: "description",
        content: "CryptoKaiju are Adding Even More Fun to Non Fungible Tokens With our Range of Highly Collectible Soft Vinyl Kaiju Toys. Each is Individual & Backed by an ERC-721 Token. Find out More & Shop Online Today"
      },
      {
        name: "subject",
        content: "CryptoKaiju dApp Explorer"
      },
      {
        name: "robots",
        content: "index,follow"
      },
      {
        property: "og:title",
        content: "CryptoKaiju dApp - Ethereum Powered Vinyl Kaiju Toys | Non Fungible Sofubi"
      },
      {
        property: "og:description",
        content: "CryptoKaiju are Adding Even More Fun to Non Fungible Tokens With our Range of Highly Collectible Soft Vinyl Kaiju Toys. Each is Individual & Backed by an ERC-721 Token. Find out More & Shop Online Today"
      },
      {
        property: "og:url",
        content: "http://dapp.cryptokaiju.io"
      },
      {
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        property: "twitter:description",
        content: "CryptoKaiju are Adding Even More Fun to Non Fungible Tokens With our Range of Highly Collectible Soft Vinyl Kaiju Toys. Each is Individual & Backed by an ERC-721 Token. Find out More & Shop Online Today"
      },
      {
        property: "twitter:title",
        content: "CryptoKaiju dApp - Ethereum Powered Vinyl Kaiju Toys | Non Fungible Sofubi"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-32x32.png"
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon-32x32.png"
      },
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.cs"
      },
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },

  manifest: {
    theme_color: "#3B8070"
  },
  /*
  ** Modules
  */
  modules: [
    "@nuxtjs/pwa",

    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  plugins: [
    {src: '~/plugins/plugins.js', ssr: false},
    {src: '~/plugins/filters.js', ssr: false},
    {src: '~/plugins/vue-social-sharing.js', ssr: true},
    // '~/plugins/plugins.js',
    // '~/plugins/filters.js',
    // '~/plugins/vue-social-sharing.js'
  ],

  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.css"],
  buildDir: "./../prod/server/nuxt",
  build: {
    publicPath: "/assets/",
    cache: true,

    vendor: [
      'vue-social-sharing',
      'vue-moment',
      'vue-chartkick',
      'vuejs-logger',
    ],

    // babel: {
    //   presets: [
    //     [
    //       'babel-preset-vue-app',
    //       {
    //         targets: process.server ?
    //           {
    //             node: '6.14.0'
    //           } :
    //           {
    //             ie: 9,
    //             uglify: true
    //           }
    //       }
    //     ]
    //   ]
    // },

    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (process.browser) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
