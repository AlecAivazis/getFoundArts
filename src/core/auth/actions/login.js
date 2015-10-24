// third party imports
import fetch from 'isomorphic-fetch'
import intersection from 'lodash/array/intersection'
import flatten from 'lodash/array/flatten'
import isEqual from 'lodash/lang/isEqual'
import cookies from 'browser-cookies'
// local imports
import validateHttpPromise from 'core/util/validateHttpPromise'
import {setAuthenticationCheck} from 'core/auth/client'
import history from 'apps/frontend/history'

export const SET_AUTH_INFO = 'SET_AUTH_INFO'

export const setAuthInfo = (userInfo) => {
    // update the cookie

    // create the action
    return {
        type: SET_AUTH_INFO,
        payload: userInfo,
    }
}

async function dispatchInfo(dispatch, authenticateHandler, redirectTo) {
    // log in using the specified handler
    const {userInfo} = await authenticateHandler()
    // if the info does not exist
    if (typeof userInfo === 'undefined') {
        // dont do anything else
        return
    }

    // save a reference to the redux store
    const store = window.moonluxStore
    // add the validation callback
    setAuthenticationCheck((...roles) => {
        // grab the auth data from the store
        const {auth} = typeof window !== 'undefined' ? store.getState() : {auth: {}}
        // return true if the data is unchanged and the user has the required role
        return isEqual(auth, userInfo) && intersection(auth.roles, flatten([...roles])).length > 0
    })

    // load the user info into the redux store
    dispatch(setAuthInfo(userInfo))
    // if we are supposed to redirect
    if (history && redirectTo) {
        // perform the redirect
        history.pushState(null, redirectTo)
    }
}


async function authenticateUserInfo(dispatch, redirectTo, email = false, password = false) {
    // fetch the authentication information
    function authenticate() {
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': cookies.get('csrfToken'),
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        // validate the request and then use the json result
        }).then(validateHttpPromise).then((response) => {
            return response.json()
        })
    }

    // dispatch the info that is a result of the handler
    dispatchInfo(dispatch, authenticate, redirectTo)
}


async function authenticateLocalToken(dispatch, redirectTo) {
    // fetch the authentication information
    function authenticate() {
        return fetch('/api/authenticateAuthToken', {
            method: 'POST',
            headers: {
                'csrf-token': cookies.get('csrfToken'),
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        // validate the request and then use the json result
        }).then(validateHttpPromise).then((response) => {
            return response.json()
        })
    }

    // dispatch the info that is a result of the handler
    dispatchInfo(dispatch, authenticate, redirectTo)
}


/**
 * This middleware attempts to authenticate the user information based on a jwt or
 * email/password combo and protects the authentication data in a closure to detect tampering.
 */
export default ({email, password, jwt, redirectTo}) => async function (dispatch) {
    // try to authenticate the provided information
    try {
        // if using email authentication credentials
        if (email) {
            // authenticate and add the user information to the client
            authenticateUserInfo(dispatch, redirectTo, email, password)
        // otherwise if we are using the jwt as an authentication credential
        } else if (jwt) {
            authenticateLocalToken(dispatch)
        }
    // if there was a problem while logging in
    } catch (error) {
        console.log('there was an error logging in')
        // if we were supposed to handle a redirect
        if (typeof redirectTo === 'undefined') {
            // redirect back to the login page
            history.pushState(null, `/login?redirectTo=${redirectTo}`)
        }
    }
}
