// third party imports
import React from 'react'
import {createStore as create_store, combineReducers} from 'redux'
// local imports
import static from 'static/client/reducer'

// combine the reducers
const reducers = combineReducers({
    static,
})

// create a store out of the reducers and some initial data
export function createStore(initial_data) {
    // pass the initial data to the store factory
    return create_store(reducers, initial_data)
}

export default createStore()
