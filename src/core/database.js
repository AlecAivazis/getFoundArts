// third party imports
import mongoose from 'mongoose'
// local imports
import {database as databaseSetting} from 'config/settings'
// grab the used values of the database config
const {host, port, name} = databaseSetting

// the url for the mongoose database
const mongoURI = `mongodb://${host}:${port}/${name}`

// create the mongoose instance
const database = mongoose.connect(mongoURI)

// third party imports
// import Sequelize from 'sequelize'
//
// create the sequelize database
// const database = new Sequelize(name, username, password, {
//     host: host,
//     dialect: engine,
//     storage: file,
// })

// export the database
export default database
