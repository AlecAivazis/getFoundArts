// third party imports
import jwt from 'jsonwebtoken'
// local imports
import {secretKey} from 'config/settings'
import User from './models/User' // TODO: bring this to global configuration


/**
 * Authenticate the user against the database
 */
async function authenticate(email, password) {
    // deal with possible errors
    try {
        // grab the user with the matching email
        const user = await User.findOne({email})
        // if the password matches
        if (user.password === password) {
            console.log('authenticated')
            // return the user
            return user
        }
        // the passwords do not match
        throw new Error('Incorrect password')
    // if there was a problem retrieving the user
    } catch (error) {
        // throw the error
        throw new Error(`There was a problem retrieving the user: ${error.message}`)
    }
}


/**
 * Log the user into the current session store
 */
async function login(res, email, password) {
    // authenticate the credentials
    const user = await authenticate(email, password)

    // generate a jwt for the
    var token = jwt.sign({userId: user.id, maxAge: '1d'}, secretKey)
    // add the token to the request cookies
    res.cookie('authToken', token, {
        // signed: true,
    })

    // pass the user onto the next guy
    return user
}


/**
 * Check that the request has the necessary authentication credentials and
 * add the matching user to the request if they are valid.
 */
function requireAuthentication() {
    // return the express middleware
    return (req, res, next) => {
        try {
            // grab the auth token from the request cookies
            const {authToken} = req.cookies
            // check if the auth token was added to the request header
            if (authToken) {
                // verify and decode the token
                const decoded = jwt.verify(authToken, secretKey)
                // find the user with the matching id
                User.findById(decoded.userId, (err, user) => {
                    // if there was an error looking for the user
                    if (err) {
                        throw new Error(err)
                    }
                    // set the user of the request
                    req.user = user
                    // we're done here
                    next()
                })
            } else {
                throw new Error('AuthToken cannot be found')
            }
        // if the current session is not authenticated
        } catch (error) {
            // figure out the url we were supposed to go to
            const targetRoute = req.url
            // redirect the user to a login page that will pass them on
            res.redirect(`/login?redirectTo=${targetRoute}`)
        }
    }
}


// module exports
export default {
    authenticate,
    login,
    requireAuthentication,
}
