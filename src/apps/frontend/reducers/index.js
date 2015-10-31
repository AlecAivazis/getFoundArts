// third party imports
import {combineReducers} from 'redux'
import {responsiveStateReducer as browser} from 'redux-responsive'
import {reducer as alerts} from 'redux-alerts'
// local imports
import auth from 'core/auth/reducer'


// export the reducers
export default combineReducers({
    browser,
    auth,
    alerts,
})
