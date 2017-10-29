var webpack = require('webpack');

var in_build = Boolean(process.env.BUILD);
var in_dev = !in_build;

var config = {
    entry: './main.js',
    resolve: {
        modules: [
            __dirname + '/src',
            __dirname + '/node_modules',
        ],
    },
    'output': {},
    'module': {},
    'plugins': [],
};

var rules = {
    js: {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react'],
            },
        },
    },
    sass: {
        test: /\.scss$/,
        exclude: __dirname + '/node_modules',
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
};

plugins = {
    productionEnv: new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    uglify: new webpack.optimize.UglifyJsPlugin(),
};

if (in_dev) {
    config.output = { path: __dirname + '/static', filename: 'app-bundle.js' };
    rules.js.use.options.presets.push('react-hmre');
    config.module.rules = [rules.js, rules.sass];
    config.devtool = 'source-map';
}

if (in_build) {
    config.output = { path: __dirname + '/build', filename: '[hash].js' };
    config.module.rules = [rules.js, rules.sass];
    config.plugins = [plugins.productionEnv, plugins.uglify];
}

module.exports = config;
