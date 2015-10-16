// third party imports
import mongoose from 'mongoose'
// local imports
import {database as databaseSetting} from '../../config/settings'
// grab the used values of the database config
const {name, username, password, host, engine, file, ...unusedSetting} = databaseSetting

// the url for the mongoose database
const moongooseUrl = `mongodb://${host}/${name}`

// create the mongoose instance
const database = mongoose.connect(host)

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
