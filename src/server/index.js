import path from 'path';
import express from 'express';
import { startServerApp } from 'redux-easy-app';

import routes from '../shared/routes';
import reducers from '../shared/reducers';
import fetchInitialData from './fetcher';

const app = express();

app.use(express.static(path.join(__dirname, '../../assets')));

startServerApp(app, {
    routes,
    reducers,
    fetchInitialData,
    viewsFolderPath: path.join(__dirname, '../../src/views'),
    viewFilename: 'index.html'
});
