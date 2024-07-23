// webpack.config.js

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './scripts/index.js'
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false,
  },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, "./src/scripts"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
};
