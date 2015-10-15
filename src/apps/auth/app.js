// third part imports
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
// local imports
import SignUpForm from './forms/signupForm'
import User from './models/User'
import auth from '../../core/auth'

// create the express app
const app = express()

// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))

// configure middlewares
app.use(cookieParser('secretString1'))
app.use(session({secret: 'secretString2'}))
app.use(auth.initialize())
app.use(auth.session())

// parse the json body
const jsonParser = bodyParser.json()

// the url the user will POST to in order to sign up
app.post('/signup', jsonParser, (req, res) => {
    // load the form with the data
    const form = new SignUpForm(req.body)
    // if the form is valid
    if (form.is_valid) {
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


app.post('/login', auth.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
}))

// export the application
export default app

// end of file
