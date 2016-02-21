import path from 'path';
import express from 'express';
import { startServerApp } from 'redux-easy-app';

import routes from '../shared/routes';
import reducers from '../shared/reducers';
import routesFetchersMap from './routesFetchersMap';

const app = express();

startServerApp(app, {
    routes,
    reducers,
    routesFetchersMap,
    viewsFolderPath: path.join(__dirname, '../../src/views'),
    viewFilename: 'index.html'
});
