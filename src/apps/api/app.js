// thirdparty imports
import express from 'express'
import graphqlHTTP from 'express-graphql'
// local imports
import schema from './graphqlSchema'
import auth from 'core/auth'

// create an express app
const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    // graphiql: true,
}))


// provide authentication information for the user specified by a jwt
app.post('/authenticateAuthToken', auth.endpoints.decryptClientToken)


// export the app
export default app
