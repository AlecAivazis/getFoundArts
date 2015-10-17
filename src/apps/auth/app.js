// third part imports
import path from 'path'
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


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    secret: secretKey,
}))


// the url the user will POST to in order to sign up
app.post('/signup', (req, res) => {
    // load the form with the data
    const form = new SignUpForm(req.body)
    // if the form is valid
    if (form.is_valid) {
        // create a new user model
        const newUser = new User(form.values)
        // save it to the database
        newUser.save((err, user) => {
            // if there is an error
            if (err || !newUser) {
                return res.status(400).send('there was a problem creating the user')
            }
            // otherwise there was no error creating the user
            console.log(`created user ${newUser.email}`)
        })
    // otherwise the form is not valid
    } else {
        // respond with an error
        res.status(400).send('form was not valid')
    }
})


// the public login point
app.post('/login', (req, res, next) => {
    // grab the provided credentials from the request
    const {email, password} = req.body
    // grab the used session values
    const {redirect_to} = req.session
    // sign in the user with the credentials
    auth.login(res, email, password)
        .then((user) => {
            // send a json redirect object
            res.send(JSON.stringify({
                // use the session value
                redirect: redirect_to || '/',
            }))
        })
        // if there was an error
        .catch((err) => {
            // TODO: add flash message
            // redirect back to the login page
            res.redirect('/login')
        })
})


// make sure we store the query parameter to handle the redirect
app.get('/login', (req, res, next) => {
    // grab the query parameters
    const {redirect_to} = req.query
    // store the redirect parameter in the session
    req.session.redirect_to = redirect_to
    // we are done here
    next()
})


// export the application
export default app

// end of file
