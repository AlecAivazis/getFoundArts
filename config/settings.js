// third party imports
var path = require('path')
// local imports
import projectPaths from './project_paths'


// the database configuration settings
export const database = {
    engine: "sqlite",
    file: path.join(projectPaths.database_dir, 'db.sqlite3'),
    name: "",
    username: "",
    password: "",
    host: "",
}
