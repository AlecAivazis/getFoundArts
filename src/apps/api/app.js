// thirdparty imports
import express from 'express'
import bodyParser from 'body-parser'
import {graphql} from 'graphql'
// local imports
// import schema from './schema'
import auth from 'core/auth'

// create an express app
const app = express()

// body parsers

const textBodyParser = bodyParser.text()

// the graphql endpoint
app.post('/graphql', textBodyParser, (req, res) => {
    // parse the body as graphql
    // graphql(schema, req.body)
    //     .catch((error) => res.status(400).send('there was an error processes your request'))
    //     .then((result) => res.send(JSON.stringify(result, null, 2)))
})


// provide authentication information for the user specified by a jwt
app.post('/authenticate', textBodyParser, async function (req, res, next) {
    try {
        // grab the user corresponding to the request auth token cookie
        const user = await auth.userByToken(req.cookies.authToken)
        // create a json response out of the users authentication profile
        res.send(JSON.stringify(auth.profileForUser(user)))
    } catch (err) {
        res.status(400).send(err.message)
    }
})


// export the app
export default app
