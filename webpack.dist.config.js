'use strict';

var webpack = require('webpack');
var devconfig = require('./webpack.config');

var distconfig = devconfig;

distconfig.cache = false;
distconfig.debug = false;
distconfig.devtool = false;
distconfig.output.path = distconfig.output.publicPath;
distconfig.plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
];

module.exports = distconfig;
