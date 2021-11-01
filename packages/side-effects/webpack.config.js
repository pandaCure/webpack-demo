/*
 * @Author: zhangzhongyou
 * @Date: 2021-11-01 20:27:42
 * @LastEditTime: 2021-11-01 20:36:50
 * @LastEditors: zhangzhongyou
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    path: "./src/index.js",
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name]-[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};
