// node imports
import path from 'path'
// express imports
import express from 'express'
// react imports
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
// local imports
import routes from './routes'
import {createStore} from './store'

// create the express app
let app = express()

// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))

// any url that hits this app
app.all('*', (req, res) => {
    // figure out the appropriate route
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        } else if (error) {
            res.status(500).send(error.message)
        } else if (renderProps === null) {
            res.status(404).send('Not found')
        // otherwise the component was found
        } else {

            // the initial store
            const initialStore = createStore()
            const intialState = JSON.stringify(initialStore.getState())

            // the initial component to render
            const initialComponent = (
                <Provider store={initialStore}>
                    <RoutingContext {...renderProps} />
                </Provider>
            )

            // render the jade template with the component mounted
            res.render('index.jade', {
                renderedComponent: renderToString(initialComponent),
                initialState: intialState,
            })
        }
    })
})

// export the application
export default app

// end of file
