// import the core database
import database from '../../../core/database'
import {Schema} from 'mongoose'
// import the string and date types
// import {STRING, TEXT} from 'sequelize'

// // export the user model
// export default database.define('User', {
//     name: {
//         type: STRING,
//     },
//     password: {
//         type: STRING,
//         defaultValue: 'password',
//     },
//     email: {
//         type: STRING,
//     },
//     link: {
//         type: STRING,
//     },
//     message: {
//         type: TEXT,
//         allowNull: true,
//     },
// })

const User = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: 'password',
    },
    link: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
})

// export the model that we added to the database
export default database.model('User', User)
