// third party imports
import {createStore as create_store} from 'redux'
import {addResponsiveHandlers} from 'redux-responsive'
// local imports
import reducers from './reducers'


// create a store out of the reducers and some initial data
export function createStore(initial_data) {
    // pass the initial data to the store factory
    // also, add the handlers to keep the responsive state up to date
    return addResponsiveHandlers(create_store(reducers, initial_data))
}

export default createStore()
