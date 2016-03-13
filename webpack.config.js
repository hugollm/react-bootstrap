module.exports =
{
    entry: './app',
    output: {
        path: 'static',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/app',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            }
        ],
    }
};
