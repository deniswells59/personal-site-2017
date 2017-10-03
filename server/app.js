require('dotenv').config();

import fs from 'fs';
import express from 'express';
import http from 'http';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

const app = express();
const server = http.createServer(app);
const port = process.env.NODE_ENV === 'dev' ? 3000 : 80;

const routes = [
  '/',
];

if(process.env.NODE_ENV === 'dev') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    'log': false,
    'path': '/__webpack_hmr',
    'heartbeat': 10 * 1000
  }));
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

app.use('/api', require('./api.js'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

server.listen(port, err => {
  console.log(err || `Listening on port ${port}`);
});
