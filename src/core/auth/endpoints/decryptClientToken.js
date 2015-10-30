// third party imports
import express from 'express'
import bodyParser from 'body-parser'
// local imports
import auth from '../'

const app = express()

// body parsers
const textBodyParser = bodyParser.text()

/**
 * This endpoint decrypts the jwt included in a request if present
 * and returns the value as the response
 */
app.use(textBodyParser, async function (req, res, next) {
    try {
        // save a reference to the auth token
        const authToken = req.cookies.authToken
        // if there is an auth token on the request
        if (authToken) {
            // grab the user corresponding to the request auth token cookie
            const user = await auth.userByToken(authToken)
            // create a json response out of the users authentication profile
            res.send(JSON.stringify({
                userInfo: auth.profileForUser(user),
            }))
        } else {
            // send the error back to the
            res.status(400).send(JSON.stringify({
                error: 'No AuthToken found.',
            }))
        }
    } catch (error) {
        res.status(400).send(JSON.stringify({
            error: 'Could not retrieve user with your token: ' + error.message,
        }))
    }
    // were done here
    next()
})


export default app
