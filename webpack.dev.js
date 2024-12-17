// webpack.dev.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const dotenv = require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
});
