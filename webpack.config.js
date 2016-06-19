var build = Boolean(process.env.BUILD);
var dev = !build;


console.log('-------------------------------------------');
console.log(dev ? 'DEV MODE' : 'BUILD MODE');
console.log('-------------------------------------------');


var config = {
    entry: './app/index',
    module: {
        loaders: []
    }
};


var loaders = {
    hot: {
        test: /\.js$/,
        loader: 'react-hot',
        include: __dirname + '/app',
    },
    babel: {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        },
    },
    stylesDev: {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname + '/app',
    },
    stylesBuild: {
        test: /\.s?css$/,
        loaders: ['style/url', 'file?name=[hash].css', 'extract', 'css', 'sass'],
        include: __dirname + '/app',
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
