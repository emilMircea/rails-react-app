var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './app/',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./dist/bundle.js",
        publicPath: ""
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    devServer: {
        /* TODO */
    },

    plugins: [
         new ExtractTextPlugin("styles.css"),
         new DashboardPlugin()
    ]

} // end
