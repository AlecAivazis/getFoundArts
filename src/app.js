// express imports
import express from 'express'
// import body_parser from 'body-parser'
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
// import static from 'serve-static'

// local imports
import frontend from './apps/frontend'

// top level express application instance
const app = express()
// server port to listen on
const port = 8000

/* Configure Middleware */


/* Configure Routes */
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`listening on ${port}`))
/* eslint-enable no-console */


// export application instance
export default app
