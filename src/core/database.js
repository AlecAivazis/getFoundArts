// third party imports
import Sequelize from 'sequelize'
// local imports
import {database as databaseSetting} from '../../config/settings'
// grab the used values of the database config
const {name, username, password, host, engine, file, ...unusedSetting} = databaseSetting


// create the sequelize database
const database = new Sequelize(name, username, password, {
    host: host,
    dialect: engine,
    storage: file
})

// export the database
export default database
