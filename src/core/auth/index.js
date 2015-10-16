// third party imports
import jwt from 'jsonwebtoken'
import moment from 'moment'
// local imports
import {secretKey} from 'config/settings'
import User from './models/User' // TODO: bring this to global configuration
import setCookie from '../util/setCookie'


/**
 * Authenticate the user against the database
 */
async function authenticate(email, password) {
    // deal with possible errors
    try {
        // grab the user with the matching email
        const user = await User.findOne({email: email})
        // if the password matches
        if (user.password === password) {
            console.log('authenticated')
            // return the user
            return user
        }
        // the passwords do not match
        throw new Error("supplied passwords don't match")
    // if there was a problem retrieving the user
    } catch (e) {
        // throw the error
        throw new Error(`There was a problem retrieving the user: ${e.message}`)
    }
}


/**
 * Log the user into the current session store
 */
async function login(response, email, password) {
    // authenticate the credentials
    const user = await authenticate(email, password)

    // generate a jwt for the
    var token = jwt.sign({userId: user.id, maxAge: '1d'}, secretKey)
    // var token = 'joe'
    // add the token to the request cookies
    response.cookie('authToken', token, {
        signed: true,
    })

    // pass the user onto the next guy
    return user
}


// module exports
export default {
    authenticate,
    login,
}
