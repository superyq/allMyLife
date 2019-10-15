const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: 'http://xbaa.free.idcfengye.com'
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.module.rules.delete("svg");
    config.module
        .rule('svg-smart')
        .test(/\.svg$/)
        .include
        .add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: '[name]'
        })
  }
}