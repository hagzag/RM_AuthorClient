const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = resolve(__dirname, '../src');
// const vendorPath = resolve(__dirname, '../src/assets/vendors');
const distPath = resolve(__dirname, '../dist');

const scssExtract = new ExtractTextPlugin('[name]-[hash].css');
const suffix = process.env.APP_CONFIG || 'dev';
module.exports = {
  entry: {
    index: ['./index.js'],
  },
  context: sourcePath,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
       // config: `${sourcePath}/config/${process.env.APP_CONFIG || 'dev'}`,
      config: `${sourcePath}/config/${suffix}`,

      // config:resolve(__dirname, '../src/config/dev.js')
    },
  },
  output: {
    path: sourcePath,
    publicPath: '',
    filename: '[name]-[hash].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: sourcePath,
    compress: true,
    port: 5000,
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: sourcePath,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['env', { modules: false }], 'es2015', 'react', 'stage-0'],
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
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    scssExtract,
    // new CopyWebpackPlugin([
    //   { from: 'images', to: 'images' },
    //   { from: 'assets', to: 'assets' },
    // ]),
    new HtmlWebpackPlugin({
      template: resolve(sourcePath, 'index.html'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
