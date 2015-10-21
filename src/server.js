// fix node land
import 'babel-core/polyfill'
// express imports
import express from 'express'
// import multer from 'multer'
// import compression from 'compression'
// import cookie_session from 'cookie-session'
import logger from 'morgan'
// import favicon from 'serve-favicon'
// import responseTime from 'response-time'
// import errorHandler from 'errorhandler'
// import vhost from 'vhost'
// import csrf from 'csurf'
// import directory from 'serve-index'
import serveStatic from 'serve-static'

// local imports
import {buildDir, assetsDir} from 'config/projectPaths'
import {api, auth, frontend} from './apps'


// top level express application instance
const app = express()
// server port to listen on
const port = 8000


/* Configure Middleware */

app.use(logger('dev'))


/* Configure Routes */

// ORDER IS IMPORTANT HERE!

app.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
app.use('/', auth)
app.use('/api', api)
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`[${new Date()}] Now listening on port: ${port}`))
/* eslint-enable no-console */


// export application instance
export default app
