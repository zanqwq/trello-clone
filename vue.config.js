module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/trello-clone/" : "/",

  outputDir: "dist",

  assetsDir: "assets",

  productionSourceMap: false,

  filenameHashing: false,

  lintOnSave: true,

  devServer: {
    disableHostCheck: true,

    open: true,

    host: "0.0.0.0",
    port: 8066,
    https: false,
    hotOnly: false,

    proxy: {
      "/api": {
        target: "http://47.100.47.3/",
        changeOrigin: true
      }
    }
  }
};
