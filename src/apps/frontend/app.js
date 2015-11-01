// third party imports
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import {templatesDir} from 'config/projectPaths'
import routes from './routes'
import {createStore} from './store'
import Root from 'views/root'
import NotFound from 'views/notFound'


// create the express app
const app = express()


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', templatesDir)


// any url that hits this app
app.all('*', (req, res) => {
    // figure out the appropriate route
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if the location is a redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if the location was found and is not a redirect
        } else {
            const store = createStore()
            // initial application state
            const initialState = JSON.stringify(store.getState())
            // rewind the header to get the most up to date version
            const head = Helmet.rewind() || {
                title: 'Get Found Arts',
            }
            // initial component to render
            let initialComponent

            // if the location was found
            if (renderProps) {
                // render the routed application
                initialComponent = (
                    <Provider store={store}>
                        <RoutingContext {...renderProps} />
                    </Provider>
                )
            // otherwise the location was not found
            } else {
                // set response status to 404
                res.status(404)
                // render the 404 page
                initialComponent = (
                    <Provider store={store}>
                        <Root>
                            <NotFound />
                        </Root>
                    </Provider>
                )
            }

            // render the jade template with the component mounted
            res.render('index.jade', {
                initialState,
                renderedComponent: renderToString(initialComponent),
                head,
            })
        }
    })
})


// export the application
export default app


// end of file
