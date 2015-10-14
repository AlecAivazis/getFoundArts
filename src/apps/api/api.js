// thirdparty imports
import express from 'express'

// create an express app
let app = express()

// route config
app.post('/graphql', (req, res) => {
    res.send('hello world')
})

// export the app
export default app
