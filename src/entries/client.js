// react imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// local imports
import routes from 'apps/frontend/routes'
import {createStore} from 'apps/frontend/store'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
/* eslint-enable no-unused-vars */

// use the browsers native history
const history = createBrowserHistory()

// grab the initial store state
const initialState = window.__INITIAL_STATE__
// and instantiate it
const store = createStore(initialState)

// render the routed application
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app')
)
