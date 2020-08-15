const path = require("path");
const px2rem = require("postcss-px2rem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5, //设计稿/10
          }),
        ],
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"], //可以省略后缀
      alias: {
        //别名
        "@": path.resolve(__dirname, "src"),
        "@component": path.resolve(__dirname, "src/component"),
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    open: true,
    port: 8080,
    proxy: {
      "/api": {
        target: "http//localhost:4000",
        changeOrigin: true,
        pathRewrite: {
          "^api": "",
        },
      },
    },
  },
};
