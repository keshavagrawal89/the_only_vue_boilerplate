const path = require('path')
var webpack = require('webpack');

module.exports = {
  devServer: {
    port: '3000',
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  },
  configureWebpack: {
    //   resolve: {
    //     extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    //     alias: {
    //         'vue': '@vue/runtime-dom'
    //     }
    // },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_TOP_SECRET': JSON.stringify(process.env.VUE_APP_TOP_SECRET),
        'process.env.VUE_APP_FANCY_VARIABLE': JSON.stringify(process.env.VUE_APP_FANCY_VARIABLE)
      })
    ]
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/style.scss";
        `
      }
    }
  }
}


// configureWebpack: {
//   resolve: {
//     extensions: [ '.tsx', '.ts', '.js', '.vue' ],
//     alias: {
//         'vue': '@vue/runtime-dom'
//     }
// },
//   plugins: [
//     new webpack.DefinePlugin({
//         'process.env.VUE_APP_TOP_SECRET': JSON.stringify(process.env.VUE_APP_TOP_SECRET),
//         'process.env.VUE_APP_FANCY_VARIABLE': JSON.stringify(process.env.VUE_APP_FANCY_VARIABLE)
//     })
//   ]
// },
// chainWebpack: config => {
//   config.resolve.alias.set(
//     'vue$',
//     path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
//   )
// },