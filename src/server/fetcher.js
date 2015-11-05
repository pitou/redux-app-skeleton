import { fetchRandomText } from '../shared/actions/someActions';

export default function(path, store) {

    const decodedPath = decodeURI(path);
    console.log("Fetcher --> Decoded path: " + decodedPath);

    /*
     *  The regex field must match the path specified in shared/routes.js
     *
     *  Route name is not necessary (doesn't have to match anything in your app),
     *  but can help e.g. with logging
     */

    const routes = [
        {   name:   'RandomTextRoute',
            regex:  /^\/randomText/,
            func:   () => fetchRandomText()
        }
    ];

    for (let i=0; i < routes.length; i++) {
        let m = routes[i].regex.exec(path);
        if (m !== null) {
            console.log(`Fetcher --> Matched ${routes[i].name}`);
            return store.dispatch(routes[i].func(m));
        }
    }

    console.log(`Fetcher --> No route matched`);
    return Promise.resolve(true);
}
