// fix browser land
import 'babel-core/polyfill'
import 'normalize.css'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import Relay from 'relay'
// local imports
import routes from 'apps/frontend/routes'
import {createStore} from 'apps/frontend/store'
import history from './history'


// grab the initial application state passed from the server
const initialState = window.__INITIAL_STATE__
// instantiate frontend store with initial application state
const store = createStore(initialState)

// expose the store on the window for the authentication to later access
window.moonluxStore = store

// render the routed application
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app')
)
