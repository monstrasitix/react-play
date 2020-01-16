// Core
const merge = require('webpack-merge');


// Common
const common = require('./webpack.common');


// Utility
const { root } = require('./webpack.util');


module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        contentBase: root('./dist'),
        port: 8000,
        hot: true,
        inline: true,
    },
});
