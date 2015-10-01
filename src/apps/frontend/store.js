
import {createStore as create_store} from 'redux'
// local imports
import reducers from './reducers'


// create a store out of the reducers and some initial data
export function createStore(initial_data) {
    // pass the initial data to the store factory
    return create_store(reducers, initial_data)
}

export default createStore()
