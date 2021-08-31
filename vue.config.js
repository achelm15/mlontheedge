module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true,
    proxy: "http://localhost:8000"
  },
  configureWebpack: {
    module:{
      rules: [
        {
          test: /config.*config\.js$/,
        }
      ]
    }
  }
}
