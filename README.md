# React Start

Boilerplate to start a new project with [React](https://facebook.github.io/react/).


## Features

* Working "hello world" application out of the box.
* Write your code using the newest javascript features.
* Write your react components with JSX.
* Development server with hot module replacement for styles. This means you will not be annoyed by a page refresh everytime you change a color.
* Write your styles in Sass. Keep the files close to your components.
* You can write your imports relative to `src` directory. No need to have imports like `../../dir/lib`.
* Source maps. You can find errors from browser without having to read bundle code.
* Optimized build with proper environment configuration and uglify. Build command emits bundle that starts at just ~123 KB (~52 KB with Gzip).
* You can safely heavy cache the generated bundle in production. The build command makes sure the generated `index.html` file references the bundle with a unique hash.


## Quick Start

Get a clean copy:

    git clone https://github.com/hugollm/react-start.git myproject
    cd myproject
    rm -rf .git
    git init

Install dependencides and start development server:

    npm install
    npm start


## Development server

    npm start

This will start a development server on `localhost:8080`. You should see a "Hello World" message in the browser when you open it.

It will run on the `static` directory and add `bundle.js` in memory (you won't see the file). The bundle is built with `js` files imported from the entrypoint `main.js`. Changes made to your code will cause a refresh in your browser tab.


## Build command

    npm run build

This command will generate a standalone working application in the `build` directory. You just have to serve it's contents with your favorite static server (apache, nginx, etc). You can test it like this:

    npm install -g http-server
    http-server build

Note: You should see your `index.html` file from `static` directory there, but the bundle script reference will now be a unique hash.
Styles are contained in the javascript bundle and are included at runtime.

Since the build command generates unique hashes for the javascript bundle, you can safely heavy cache that, dramatically improving user experience.
