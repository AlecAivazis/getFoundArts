// local imports
import {POP_MESSAGE, PUSH_MESSAGE} from '../actions'


/**
 * This reducer manages the queue of flash messages
 */
export default (state = [], {type, payload}) => {
    // if we need to push a message to the queue
    if (type === PUSH_MESSAGE) {
        // add the payload to the state queue
        return [...state, payload]
    }

    // if we need to remove a message from the queue
    if (type === POP_MESSAGE) {
        // remove the first item from the queue
        return state.slice(1)
    }
    // otherwise its an action we dont recognize
    // return the previous state
    return state
}