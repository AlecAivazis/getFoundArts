// import the core database
import {database} from '../../../core/database'
// import the string and date types
import {STRING, DATE} from 'sequelize'

// export the user model
export default database.define('User', {
    firstName: STRING,
    lastName: STRING,
})
