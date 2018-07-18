'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    './src/client/app'
  ],
  output: {
    path: path.join(__dirname, '/dist/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:3000/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    alias: {
      'react-addons-shallow-compare': 'react/lib/shallowCompare'
    },
    modules: [
      path.join(__dirname, './src'),
      path.join(__dirname, './node_modules'),
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader', 'eslint-loader'],
      include: [
        path.resolve(__dirname, './src'),
      ]
    }]
  }
};
