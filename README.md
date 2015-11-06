redux-app-skeleton
==================

Simple app built to show how **Redux** works, it's a good starting point to
create something more complex.

To keep things really simple, it depends on [redux-easy-app](https://github.com/poetcyborg/redux-easy-app),
which allows the app to be unaware of Redux and keep the components dumb.


Features
--------
* Server side rendering on page load
* Async actions
* Dumb components (access to actions and state via their own props)
* Routing on both client and server


How to use
----------

First you need to install some dependencies:

    npm install -g babel@5 webpack

    npm install

Then launch the app using:

    npm run dev


Inspirations
------------

This project was inspired by some other cool apps you may want to check out:

https://github.com/khtdr/redux-react-koa-isomorphic-counter-example

https://github.com/RickWong/react-isomorphic-starterkit
