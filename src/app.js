// express imports
import express from 'express'
import body_parser from 'body-parser'
// import multer from 'multer'
// import compression from 'compression'
// import cookie_session from 'cookie-session'
// import cookie_parser from 'cookie-parser'
// import logger from 'morgan'
// import session from 'express-session'
// import favicon from 'serve-favicon'
// import responseTime from 'response-time'
// import errorHandler from 'errorhandler'
// import vhost from 'vhost'
// import csrf from 'csurf'
// import directory from 'serve-index'
import serve_static from 'serve-static'

// local imports
import frontend from './apps/frontend'
import auth from './apps/auth'
import {build_dir, asset_dir} from '../config/project_paths'
import SignUpForm from './apps/auth/forms/signupForm'

// top level express application instance
const app = express()
// server port to listen on
const port = 8000


// parse the json body
const jsonParser = body_parser.json()

/* Configure Middleware */


/* configure the database */



/* Configure Routes */
app.use('/static', serve_static(build_dir))
app.use('/static', serve_static(asset_dir))

// the url the user will POST to in order to sign up
app.post('/signup', jsonParser, (req, res) => {
    // load the form with the data
    const form = new SignUpForm(req.body)
    // if the form is valid
    if (form.is_valid){
        // respond a success
        res.send('success')
    // otherwise the form is not valid
    } else {
        // respond with an erro
        res.status(400).send('failure')
    }
})


// the root client entry point
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`listening on ${port}`))
/* eslint-enable no-console */


// export application instance
export default app
