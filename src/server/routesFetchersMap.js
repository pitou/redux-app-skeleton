import { fetchRandomText } from '../shared/actions/someActions';

/*
 *  The regex field must match the path specified in shared/routes.js
 *
 *  Route name is not necessary (doesn't have to match anything in your app),
 *  but can help e.g. with logging
 */

export default
[
    {   name:   'RandomTextRoute',
        regex:  /^\/randomText/,
        func:   () => fetchRandomText()
    }
];
