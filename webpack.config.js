var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/main.js',
  output: { path: path.join(__dirname, 'public/dist'), filename: 'app.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
