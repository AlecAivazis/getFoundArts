// import the core database
import database from '../../../core/database'
// import the string and date types
import {STRING, TEXT} from 'sequelize'

// export the user model
export default database.define('User', {
    name: {
        type: STRING,
    },
    email: {
        type: STRING,
    },
    link: {
        type: STRING,
    },
    message: {
        type: TEXT,
        allowNull: true,
    },
})
