// third party imports
import {createStore as create_store, applyMiddleware} from 'redux'
import {addResponsiveHandlers} from 'redux-responsive'
import thunk from 'redux-thunk'
// local imports
import reducers from './reducers'


// create a store out of the reducers and some initial data
export function createStore(initialData) {
    // apply various middlewares to the store
    const storeFactory = applyMiddleware(
        thunk, // for async actions
    )(create_store)

    // pass the initial data to the store factory
    // also, add the handlers for responsive state updates
    return addResponsiveHandlers(storeFactory(reducers, initialData))
}


// export a store with no initial data
export default createStore()
