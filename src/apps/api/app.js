// thirdparty imports
import express from 'express'
import bodyParser from 'body-parser'
import {graphql} from 'graphql'
// local imports
// import schema from './schema'

// create an express app
const app = express()

// middleware config
app.use(bodyParser.text({
    type: 'application/graphql',
}))

// route config
app.post('/graphql', (req, res) => {
    // parse the body as graphql
    // graphql(schema, req.body)
    //     .catch((error) => res.status(400).send('there was an error processes your request'))
    //     .then((result) => res.send(JSON.stringify(result, null, 2)))
})


// export the app
export default app
