// thirdparty imports
import express from 'express'
import bodyParser from 'body-parser'
import {graphql} from 'graphql'
import graphqlHTTP from 'express-graphql'
// local imports
import schema from './schema'
import auth from 'core/auth'

// create an express app
const app = express()

// body parsers
const textBodyParser = bodyParser.text()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
}))


// provide authentication information for the user specified by a jwt
app.post('/authenticateAuthToken', textBodyParser, async function (req, res, next) {
    try {
        // if there is an auth token on the request
        if (req.cookies.authToken) {
            // grab the user corresponding to the request auth token cookie
            const user = await auth.userByToken(req.cookies.authToken)
            // create a json response out of the users authentication profile
            res.send(JSON.stringify({
                userInfo: auth.profileForUser(user),
            }))
        } else {
            res.send('{"error" : "foo"}')
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
})


// export the app
export default app
