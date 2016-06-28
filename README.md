# React Bootstrap

Boilerplate to start a new project with [React](https://facebook.github.io/react/).


## Features

* Working "hello world" application out of the box.
* Write your code using new javascript features from es2015 (import, export, class, etc).
* Write your react components with JSX.
* Development server with hot module replacement for react components and styles. This means you will not be annoyed by a page refresh everytime you change something.
* Write your styles in Sass. Keep the files close to your components.
* You can write your imports relative to `src` directory. No need to have imports like `../../dir/lib`.
* Source maps. You can find errors from browser without having to read bundle code.
* Optimized build with uglify.
* You can safely heavy cache your assets in production. The build command generates references with unique hashes.


## Quick Start

Get a clean copy:

    git clone https://github.com/hugollm/react-bootstrap.git myproject
    cd myproject
    rm -rf .git
    git init

Install dependencides and run development server:

    npm install
    npm run server


## Development server

    npm run server

This will start a development server on `localhost:8080`. You should see a "Hello World" message in the browser when you open it.

It will run on the `static` directory and add `bundle.js` in memory (you won't see the file). The bundle is built with `js` files imported from the entrypoint `main.js`. Changes made to your code are automatically reflected upon your browser tab.


## Build command

    npm run build

This command will generate a standalone working application in the `build` directory. You just have to serve it's contents with your favorite static server (apache, nginx, etc). You can test it like this:

    npm install http-server
    http-server build

Note: You should see your `index.html` file from `static` directory there, but the bundle script reference will now be a unique hash.
Styles are included in runtime.

Since the build command generates unique hashes for the assets (js, css), you can safely heavy cache those, dramatically improving user experience.
