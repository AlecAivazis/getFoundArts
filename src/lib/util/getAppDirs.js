// node imports
import path from 'path'
// third party imports
import glob from 'glob'
// local imports
import {apps_dir} from 'config/project_paths'


/**
 * Returns list of app directories.
 */
export function getAppDirs() {
    // glob up all app directories (relative to `apps_dir`)
    return glob.sync('*/', {cwd: apps_dir})
        // map relative paths to absolute paths
        .map(relative_path => path.join(apps_dir, relative_path))
}
