# React Bootstrap

Boilerplate to start a new project with [React](https://facebook.github.io/react/).


## Features

* Get a working javascript project without the setup fatigue.
* Write your code using new javascript features from es2015 (import, export, class, etc).
* Write your react components with JSX.
* Development server with a fast live reload.
* Uglified build.
* The setup is as simple as it gets (at least with javascript). You should have no problem extending it to your needs.


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

This will start a desevolpment server on `localhost:8080`. You should see a "Hello World" message in the browser when you open it.

It will run on the `static` directory and add `bundle.js` in memory (you won't see the file). The bundle is built with `js` files in `app` directory. Changes made to your app are automatically reflected upon your browser tab (thanks to `webpack-dev-server` magick).


## Build command

    npm run build

This command will copy `static` directory into `build` and include the uglified `bundle.js`. The `build` directory is now a self-contained react application. You just have to serve it's contents with your favorite static server (apache, nginx, etc).
