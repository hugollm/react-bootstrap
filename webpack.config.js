module.exports =
{
    entry: './app/index',
    devtool: 'source-map',
    output: {
        path: 'static',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot',
                include: __dirname + '/app',
            },
            {
                test: /\.js$/,
                include: __dirname + '/app',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            }
        ],
    },
};
