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

/**
 * This middleware attempts to authenticate the user information based on a jwt or
 * email/password combo and protects the authentication data in a closure to detect tampering.
 */
export default ({email, password, jwt, redirectTo}) => async function (dispatch) {
    // try to authenticate the provided information
    try {
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
                    jwt: jwt || false,
                    email: email || false,
                    password: password || false,
                }),
            // validate the request and then use the json result
            }).then(validateHttpPromise).then((response) => {
                return response.json()
            })
        }

        // log in using the specified data
        const {userInfo} = await authenticate()
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

        // if the response contains a redirect
        if (history) {
            // perform the redirect
            history.pushState(null, redirectTo)
        }
    // if there was a problem while logging in
    } catch (error) {
        // redirect back to the login page
        history.pushState(null, '/login')
    }
}
