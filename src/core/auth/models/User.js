// import the core database
import database from 'core/database'
import {Schema} from 'mongoose'

/**
 * This schema describes the user information stored in the database.
 */
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
    roles: {
        type: [String],
        default: ['artist'],
    },
})

// export the model that we added to the database
export default database.model('User', User)
