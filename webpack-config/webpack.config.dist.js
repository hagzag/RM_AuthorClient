const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = resolve(__dirname, '../src');
const vendorPath = resolve(__dirname, '../src/assets/vendors');
const distPath = resolve(__dirname, '../dist');

const scssExtract = new ExtractTextPlugin('[name]-[hash].css');

module.exports = {
  entry: {
    index: ['./index.js'],
  },
  context: sourcePath,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      config: resolve(__dirname, '../src/config/dist.js'),
    },
  },
  output: {
    path: distPath,
    publicPath: '/services/',
    filename: '[name]-[hash].js',
  },
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: distPath,
  //   compress: true,
  //   port: 8001,
  //   hot: true,
  //   inline: true,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: sourcePath,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['env', { modules: false }], 'react'],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        use: scssExtract.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', {
            loader: 'sass-loader', options: { sourceMap: true },
          }],
        }),
      },
      {
        test: /\.css$/,
        use: scssExtract.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(woff2?|ttf|svg|eot|jpg|png|gif)?(\?.+)?$/,
        use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
      },
    ],
  },
  plugins: [
    scssExtract,
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      { from: 'assets', to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      template: resolve(sourcePath, 'index.html'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};
