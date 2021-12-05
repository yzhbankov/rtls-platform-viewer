const debug = process.env.NODE_ENV !== 'production'
const path = require('path')
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './lib/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {test: /\.html$/, loader: 'html-loader'},
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.mjs', '.tsx', '.ts'],
  },
  devServer: {
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.min.js',
    publicPath: '/',
    chunkFilename: '[id].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  externals: [
    {
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
    }
  ],
  plugins: [
    new Dotenv({
      defaults: true
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
