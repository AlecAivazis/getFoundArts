// third party imports
import {combineReducers} from 'redux'
import {responsiveStateReducer} from 'redux-responsive'


// export the reducers
export default combineReducers({
    browser: responsiveStateReducer,
    auth: (state, action) => {
        return {
            roles: [
                'admin'
            ],
        }
    },
})
