// third part imports
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import connectRedis from 'connect-redis'
import {createClient} from 'redis'
// local imports
import auth from '../../core/auth'
import SignUpForm from './forms/signupForm'
import User from './models/User'

// create the express app
const app = express()

// the redis store object
const RedisStore = connectRedis(session)

// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))

// configure middlewares
app.use(cookieParser('secretString1'))
app.use(session({
    store: new RedisStore({
        client: createClient(),
        host: 'localhost',
        port: 6379,
    }),
    secret: 'secretString2',
    resave: false,
    saveUninitialized: false,
}))

// parse the json body
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.raw()

app.use(jsonParser)
app.use(urlEncodedParser)

app.use(auth.initialize())
app.use(auth.session())

// the token to create

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

app.get('/test',
    (req, res, next) => {
        console.log(req.session)
        console.log(`user at /test: ${req.user}`)
        res.send(req.user)
    }
)

// the public login point
app.post('/login', (req, res, next) => {
    // authenticate the request
    // note: this is done as a custom callback in order to support ajax redirects
    auth.authenticate('local-login', (authError, user) => {
        console.log(user)
        // if there was an error while logging in
        if (authError) {
            // pass the error on
            return next(authError)
        }
        // if there was no user
        if (!user) {
            // redirect the request to the login page
            return res.send(JSON.stringify({
                redirect: '/login',
            }))
        }
        // the user was authenticated

        // create the users session
        req.login(user, (loginError) => {
            // if there was an error logging in
            if (loginError) {
                // pass it on
                next(loginError)
            }

            console.log(`logged in: ${user.id}`)
            console.log(`req user: ${req.user}`)
            req.session.foo = 'bar'
            // redirect the user to the homepage
            return res.send(JSON.stringify({
                redirect: '/test',
            }))
        })
    })(req, res, next)

})

// export the application
export default app

// end of file
