var build = Boolean(process.env.BUILD);
var dev = !build;


console.log('-------------------------------------------');
console.log(dev ? 'DEV MODE' : 'BUILD MODE');
console.log('-------------------------------------------');


var config = {
    entry: './app/main',
    module: {
        loaders: []
    }
};


var loaders = {
    hot: {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        loader: 'react-hot',
    },
    babel: {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        },
    },
    stylesDev: {
        test: /\.s?css$/,
        exclude: __dirname + '/node_modules',
        loaders: ['style', 'css', 'sass'],
    },
    stylesBuild: {
        test: /\.s?css$/,
        exclude: __dirname + '/node_modules',
        loaders: ['style/url', 'file?name=[hash].css', 'extract', 'css', 'sass'],
    }
};


if (dev) {
    config['output'] = {path: 'static', filename: 'bundle.js'};
    config['module']['loaders'] = [loaders.hot, loaders.babel, loaders.stylesDev];
    config['devtool'] = 'source-map';
}

if (build) {
    config['output'] = {path: 'build', filename: 'bundle.js'};
    config['module']['loaders'] = [loaders.hot, loaders.babel, loaders.stylesBuild];
}


module.exports = config;
