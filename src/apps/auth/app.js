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

// the token to create

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
                .then((user) => {
                    console.log(`created user ${user.name}`)
                    res.send('success')
                })
                // if it fails
                .error(() => res.status(400).send('problem creating user'))
        })
    // otherwise the form is not valid
    } else {
        // respond with an error
        res.status(400).send('form was not valid')
    }
})


// the public login point
app.post('/login', (req, res, next) => {
    console.log('trying to log in')
    // authenticate the request
    auth.authenticate('local-login', (authError, user) => {
        console.log(user)
        // if there was an error while logging in
        if (authError) {
            // pass the error on
            return next(authError)
        }
        // if there was no user
        if (!user) {
            console.log('redirecting back')
            // redirect to the login page
            return res.redirect('/login')
        }
        // the user was authenticated

        // create the users session
        req.logIn(user, (loginError) => {
            // if there was an error logging in
            if (loginError) {
                // pass it on
                next(loginError)
            }

            console.log('you were logged in')
            return res.send('hello')
        })
    })(req, res, next)

})

// export the application
export default app

// end of file
