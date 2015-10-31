// local imports
import {SET_AUTH_INFO} from './actions/login'

/**
 * Reducer for managing user authentication information
 */
export default (state = {}, action) => {
    console.log(action)
    // grab the action type
    const {type, payload} = action
    // if we are setting the user info
    if (type === SET_AUTH_INFO) {
        // return the userInfo contained in payload
        return payload
    }
    // otherwise its an action we don't recognize
    // don't change anything
    return state
}
