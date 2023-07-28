const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    port: 1988,
    proxy: {},
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
