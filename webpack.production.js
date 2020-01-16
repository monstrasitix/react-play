// Core
const merge = require('webpack-merge');


// Common
const common = require('./webpack.common');


// Utility
const { rule } = require('./webpack.util');


// Plugins
const CSSPlugin = require('mini-css-extract-plugin');



module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            rule({
                test: /\.scss$/,
                use: [
                    CSSPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }),
        ],
    },
    plugins: [
        new CSSPlugin(),
    ],
});
