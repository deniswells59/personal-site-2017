var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      APP_DIR
    ],
  },
  output: {
    path: BUILD_DIR,
    publicPath:'http://localhost:3000/build/',
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
     },
     {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
     }
   ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
