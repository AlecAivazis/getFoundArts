// third part imports
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
// local imports
import {secretKey} from 'config/settings'
import auth from 'core/auth'
import SignUpForm from './forms/signupForm'
import User from 'core/auth/models/User'


// create the express app
const app = express()

const jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secretKey,
}))


// the url the user will POST to in order to sign up
app.post('/signup', jsonParser, (req, res) => {
    // load the form with the data
    const form = new SignUpForm(req.body)
    // if the form is valid
    if (form.is_valid) {
        // create a new user model
        const newUser = new User(form.values)
        // save it to the database
        newUser.save((error, user) => {
            if (error) {
                res.status(400).send(error.message)
            }
            res.send(`created user ${user.id}`)
        })
    // otherwise the form is not valid
    } else {
        // respond with an error
        res.status(400).send(`invalid form: ${form.errors}`)
    }
})


// the public login point
app.post('/login', jsonParser, (req, res) => {
    // grab the provided credentials from the request
    const {email, password} = req.body
    // sign in the user with the credentials
    auth.login(res, email, password)
        .then(user => {
            // send a json redirect object
            res.send(JSON.stringify({
                // send the user authentication profile to the frontend
                userInfo: auth.profileForUser(user),
            }))
        })
        // if there was an error
        .catch(error => {
            // TODO: add flash message
            // redirect back to the login page
            res.send(JSON.stringify({
                // use the session value
                error: error.message,
            }))
        })
})


// export the application
export default app

// end of file
