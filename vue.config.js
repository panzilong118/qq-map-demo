const path = require('path');

const { env: { BASE_URL }, VUE_CLI_SERVICE: { mode } } = process;
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 修改为相对路径
  publicPath: BASE_URL,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://tst.sparta.html5.qq.com',
        // target: 'https://tst.map.qq.com',
        changeOrigin: true,
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080
  },
  chainWebpack: config => (
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('variable', resolve('src/variable.styl'))
  ),
  configureWebpack: config => {
    config.externals = {
      TMap: 'TMap'
    }
  },
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: mode !== 'production',
};
