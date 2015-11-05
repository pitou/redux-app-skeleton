/*
 *  You can use this file without changing anything but the appRootElement
 */

import { renderClientApp } from 'redux-easy-app';

import routes from '../shared/routes';
import reducers from '../shared/reducers';

renderClientApp({
    routes,
    reducers,
    appRootElement: document.getElementById('App')
});
