/**
 * Base build configuration common to both live and development builds.
 *   references:
 *     * http://webpack.github.io/docs/
 *     * https://github.com/petehunt/webpack-howto
 */

// local imports
var project_paths = require('../project_paths')


// export the configuration
module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: project_paths.source_dir,
            },
        ],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }, {
                test: /\.js$/,
                loader: 'babel',
                include: project_paths.source_dir,
                query: {
                    stage: 0,
                }
            },
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        root: [project_paths.source_dir, project_paths.root_dir]
    },
    eslint: {
        configFile: project_paths.eslint_config,
        failOnError: true,
    },
}


// end of file
