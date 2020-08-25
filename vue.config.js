'use strict'
const path = require('path')

// 引入子系统运行打包配置
const pageConfig = require('./projectsConfig.js')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 部署应用包时的基本 URL,在开发环境使用根路径，在生产环境使用相对路径，这样打包资源路径才不会出错
  outputDir: 'dist/' + process.env.selfDirName, // 打包时生成的生产环境构建文件的目录
  assetsDir: 'static', // 打包后的 css、js 等静态文件目录名
  lintOnSave: true, // 是否开启 eslint 校验
  ...pageConfig[process.env.selfDirName], // 多页面应用配置，运行哪个项目，就选取对应项目的 JavaScript 入口文件
  devServer: {
    index: `/${process.env.selfDirName}.html`,
    contentBase: path.join(__dirname, process.env.selfDirName),
    port: process.env.port // 项目打开的端口号
    // open: true,  // proxy代理
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://10.1.1.139:8444',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '多页面应用测试',
    resolve: {
      alias: { // 别名
        '@': path.resolve(__dirname, './src'),
        '@static': path.resolve(__dirname, './static')
      }
    }
  },
  chainWebpack (config) {
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', config =>
        config.devtool('cheap-source-map')
      )

    config
      .plugin('copy')
      .init(
        CopyWebpackPlugin =>
          new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, './static'),
              to: path.resolve(__dirname, './dist/static')
            }
          ])
      )
      .end()
  }
}
