// node imports
import path from 'path'
// third party imports
import glob from 'glob'
// local imports
import {appsDir} from 'config/projectPaths'


/**
 * Returns list of app directories.
 */
export function getAppDirs() {
    // glob up all app directories (relative to `appsDir`)
    return glob.sync('*/', {cwd: appsDir})
        // map relative paths to absolute paths
        .map(relativePath => path.join(appsDir, relativePath))
}
