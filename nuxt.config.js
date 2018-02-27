module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '我的微信测试' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['~plugins/element-ui'],
  /*
  ** 路由设置
  */
  router: {
    middleware: 'auth',
    middleware: 'wechat-auth'
  }, 
  /*
  ** Global CSS
  */
  css: ['~assets/css/reset.css',
        '~assets/css/main.css',
        { src: '~assets/common/stylus/index.styl', lang: 'stylus' } // 指定 scss 而非 sass
       ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios']
    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
  ],
  proxy: [
      ['/api', { 
          target: 'http://zhongzhng.qicp.io:16097',
          pathRewrite: { '^/api' : '/' }
      }]
  ]
}
