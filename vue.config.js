module.exports = {
  baseUrl: './',
  devServer: {
    // open: true,
    // https: false,
    // hotOnly: false,
    port: 8080,
    disableHostCheck: true, // 处理 host 不识别问题
    // proxy: 'http://localhost:8080'
    proxy: 'http://47.112.195.182:8080'
  }
}
