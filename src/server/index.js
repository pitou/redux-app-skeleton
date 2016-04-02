import path from 'path';
import express from 'express';
import webpack from 'webpack';
import { startServerApp } from 'redux-easy-app';
import reducers from '../shared/reducers';

import routes from '../shared/routes';
import routesFetchersMap from './routesFetchersMap';

var config = require('../../webpack.config.dev');
var compiler = webpack(config);

const app = express();

app.use(express.static(path.join(__dirname, '../../assets')));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

startServerApp(app, {
    routes,
    reducers,
    routesFetchersMap,
    viewsFolderPath: path.join(__dirname, '../../src/views'),
    viewFilename: 'index.html'
});
