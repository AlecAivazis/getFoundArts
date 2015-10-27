// third party imports
import {combineReducers} from 'redux'
import {responsiveStateReducer as browser} from 'redux-responsive'
// local imports
import auth from 'core/auth/reducer'
import flashMessages from './flashMessages'


// export the reducers
export default combineReducers({
    browser,
    auth,
    flashMessages,
})
