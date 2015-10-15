// third party imports
import path from 'path'
// local imports
import projectPaths from './projectPaths'


// the database configuration settings
export const database = {
    engine: 'sqlite',
    file: path.join(projectPaths.databaseDir, 'db.sqlite3'),
    name: '',
    username: '',
    password: '',
    host: '',
}
