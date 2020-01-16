// Plugins
const HTMLPlugin = require('html-webpack-plugin');
const CSSPlugin = require('mini-css-extract-plugin');


// Utility
const { root, rule } = require('./webpack.util');


module.exports = {
    entry: {
        app: root('./src/index.tsx'),
    },
    output: {
        path: root('./dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            rule({
                test: /\.tsx?$/,
                use: 'ts-loader',
            }),
            rule({
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }),
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.scss',
            '.json',
        ],
    },
    plugins: [
        new HTMLPlugin({
            template: root('./src/index.html'),
            filename: 'index.html',
        }),
    ],
};