'use strict';
var webpack = require('webpack');

module.exports = {

  node: { net: "empty", dns: "empty" },

  cache: true,
  debug: true,
  devtool: "source-map",

  stats: { colors: true, reasons: true },

  entry: {
    app: "./src/scripts/main.js",
  },

  output: {
    filename: 'main.js',
    publicPath: 'dist/',
    path: "dist/"
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.scss'],
    root: __dirname,
    alias: {
      'App': __dirname + '/src/scripts',
      'Style': __dirname + '/src/styles'
    },
    modulesDirectories: [
      __dirname + '/node_modules',
      'node_modules'
    ]
  },

  // les loaders
  resolveLoader: {
      modulesDirectories: [
          __dirname + '/node_modules'
      ]
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader?optional=runtime'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.json$/,
      loader: "json"
    }]
  }

};
