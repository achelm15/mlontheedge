module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: '/',
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:8000'
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /config.*config\.js$/
        }
      ]
    }
  }
}
