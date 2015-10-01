// third party imports
import {combineReducers} from 'redux'
// local imports
import responsiveState from './responsiveState'


// export the reducers
export default combineReducers({
    browser: responsiveState,
})
