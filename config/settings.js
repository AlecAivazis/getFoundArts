// third party imports
import path from 'path'
// local imports
import projectPaths from './projectPaths'


// the database configuration settings
export const database = {
    engine: 'mongoose',
    name: 'getFoundArts',
    host: 'localhost',
    // file: path.join(projectPaths.databaseDir, 'db.sqlite3'), // for sqlite only
    // username: '',
    // password: '',

}
