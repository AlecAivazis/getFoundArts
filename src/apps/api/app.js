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
app.post('authenticate', textBodyParser, (req, res) => {
    // grab the user corresponding to the token that is sent by the request
    auth.userByToken(req.body)
        .then((user) => {
            // create a json response out of the users authentication profile
            res.send(JSON.stringify(auth.profileForUser(user)))
        })
})


// export the app
export default app
