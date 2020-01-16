/**
 * Core webpack configuration. When invoked through CLI the provided environment
 * will be used to lookup separate file for the bundling process.
 */
module.exports = environment => (
    require(`./webpack.${environment}.js`)
);
