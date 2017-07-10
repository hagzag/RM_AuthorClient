const  path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.resolve(__dirname, '../src');
const scssExtract = new ExtractTextPlugin('[name]-[hash].css');
const webpack = require('webpack');


module.exports = {

  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].bundle.js',
    publicPath: '',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/\.(spec|e2e)\.ts$/],
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
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
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),


  ]
}
