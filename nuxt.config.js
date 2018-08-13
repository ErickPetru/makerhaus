module.exports = {
  head: {
    title: 'MakerHaus Social',
    /*
      <meta name="theme-color" content="#df1146">
    */
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sua voz ainda mais poderosa. Aumente sua exposição no Instagram.' },
      { name: 'theme-color', content: '#df1146' }
    ],
    /*
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="icon" type="image/x-icon" href="/favicon.ico">
      <link rel="manifest" href="/manifest.json">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#df1146">
    */
    link: [
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#df1146' }
    ]
  },
  loading: { color: '#ffff00' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeSVGTagAttrs=false',
        exclude: /node_modules/
      })
    }
  }
}
