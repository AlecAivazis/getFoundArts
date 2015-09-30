// gulp imports
import gulp from 'gulp'
import del from 'del'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import shell from 'gulp-shell'
import env from 'gulp-env'
// misc third party imports
import assign from 'lodash/object/assign'
// local imports
import project_paths from './config/project_paths'


/**
 * Run the server.
 */
gulp.task('runserver', shell.task('nodemon ' + project_paths.server_entry))


/**
 * Build client entry point.
 */
gulp.task('build-client', ['clean'], () => {
    return gulp.src(project_paths.client_entry)
               .pipe(named())
               .pipe(webpack(require(project_paths.webpack_client_config)))
               .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build client entry point.
 */
gulp.task('watch-client', ['clean'], () => {
    var config = assign({}, require(project_paths.webpack_client_config), {
        watch: true,
    })

    return gulp.src(project_paths.client_entry)
               .pipe(named())
               .pipe(webpack(config))
               .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build the client entry point for live
 */
gulp.task('build-client-live', ['clean'], () => {
    // set the environment variable
    env({
        vars: {
            NODE_ENV: 'production'
        }
    })
    // build the client
    return gulp.src(project_paths.client_entry)
               .pipe(named())
               .pipe(webpack(require(project_paths.webpack_client_config)))
               .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Remove all ouptut files from previous frontend builds.
 */
gulp.task('clean', () => {
    del.sync(project_paths.build_dir)
})


// end of file
