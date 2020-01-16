// Core
const path = require('path');


/**
 * Root path of this project is being resolved with current directory.
 * Used to reference directories from root.
 * @summary Resolves path from root
 * @params {string} path - Path to be resolved
 * @returns {string} Resolved path
 */
const root = path.resolve.bind(undefined, __dirname);


/**
 * Webpack module rule wrapper ti provide common properties.
 * Each rule would guarantee to exclude bundling from certain
 * directories.
 * @param {object} config - Webpack rule object
 */
const rule = config => ({
    ...config,
    exclude: [
        /\.storybook/,
        /node_modules/,
        /generated/,
        /test/,
    ],
});



module.exports = {
    root,
    rule,
};