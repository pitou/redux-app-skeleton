import React from 'react';
import { Route, NoMatch, IndexRoute } from 'react-router';

import LayoutComponent from './components/LayoutComponent';
import IndexContainer from './containers/IndexContainer';
import RandomTextContainer from './containers/RandomTextContainer';
import AboutComponent from './components/AboutComponent';

export default (
    <Route path="/" component={LayoutComponent}>
        <IndexRoute component={IndexContainer} />
        <Route path="/randomText" component={RandomTextContainer} />
        <Route path="/about" component={AboutComponent} />
        <Route path="*" component={NoMatch}/>
    </Route>
);
