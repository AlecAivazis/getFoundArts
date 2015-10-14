// third part imports
import path from 'path'
import express from 'express'
import body_parser from 'body-parser'
// local imports
import SignUpForm from './forms/signupForm'
import User from '../auth/models/User'

// create the express app
let app = express()

// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))


// parse the json body
const jsonParser = body_parser.json()

// the url the user will POST to in order to sign up
app.post('/signup', jsonParser, (req, res) => {
    // load the form with the data
    const form = new SignUpForm(req.body)
    // if the form is valid
    if (form.is_valid){
        // get a connection to the database
        User.sync().then(() => {
            // create a user out of the form data
            User.create(form.values)
                // if it exceeds
                .then(() => res.send('success'))
                // if it fails
                .error(() => res.status(400).send('problem creating user'))
        })
    // otherwise the form is not valid
    } else {
        // respond with an error
        res.status(400).send('form was not valid')
    }
})

// export the application
export default app

// end of file
