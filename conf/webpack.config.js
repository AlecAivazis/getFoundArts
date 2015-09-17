/*
 * Frontend build configuration using webpack.
 *   reference: https://github.com/petehunt/webpack-howto
 */

// node imports
var path = require('path');

// relevant directories
var current_location = path.resolve('.');
var project_root = path.join(current_location)
var asset_dir = path.join(project_root, 'getFoundArts', 'assets');
var scripts_dir = path.join(asset_dir, 'scripts');
var build_dir = path.join(asset_dir, 'build');

// export the configuration
module.exports = {
    watch: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg)$/, loader: 'url-loader' },
            { test: /\.js$/, loaders: ['babel?optional[]=es7.decorators'], exclude: /node_modules/ },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.styl', '.css'],
        root: [current_location, asset_dir, scripts_dir]
    },
};


// end of file
