var path = require('path');

module.exports = {
    entry: './app/entry.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./dist/bundle.js",
        publicPath: ""
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    devServer: {
        /* TODO */
    },

    plugins: [
        // ...
    ]

} // end
