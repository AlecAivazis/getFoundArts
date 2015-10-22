// react imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import fetch from 'isomorphic-fetch'
import cookies from 'browser-cookies'
// local imports
import RootComponent from './views/root'
import SplashPage from './views/splash'
import Login from './views/login'
import Users from './views/users'
import validateHttpPromise from 'core/util/validateHttpPromise'


export default (
    <Route path='/' component={RootComponent}>
        <IndexRoute component={SplashPage} />
        <Route path='login' component={Login} />
        <Route path='users' component={Users} onEnter={async function(nextState, replaceState) {

            if (typeof document === 'undefined') {
                return
            }
            console.log('fetching')
            fetch('/api/authenticate/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'csrf-token': cookies.get('csrfToken'),
                },
                credentials: 'include',
                body: 'hello',
            }).then(validateHttpPromise).then(response => response.json())
            .then((profile) => {
                console.log(profile)
            })
            .catch((err) => {
                console.log(`there was an error: ${err.message}`)
                // replaceState({redirectTo: nextState.location.pathname}, '/login')
                window.location = '/login'
            })


            // async function validateJwt() {
            //     return fetch('/api/authenticate', {
            //         method: 'POST',
            //         credentials: 'include', // include the browser cookies in the request
            //         header: {
            //             Accept: 'application/json',
            //             'Content-Type': 'application/json',
            //             'csrf-token': cookies.get('csrfToken'),
            //         },
            //     }).then(validateHttpPromise)
            // }

            // try to validate the view using the jwt
            // try {
            //     console.log('validating jwt')
            //     const userProfile = await validateJwt()
            //     console.log(userProfile)
            //     // add the user to the router state
            //     replaceState({user: userProfile})

            // // catch any errors with authenticating the users token
            // } catch (err) {
            //     console.log('there was an error logging in')
            //     // TODO: add flash message with error
            //     // redirect to the login page
            //     replaceState({redirectTo: nextState.location.pathname}, '/login')
            // }

            // // list of roles that can access this route
            // const roles = ['admin']
            // // grab current user's authentication data off of redux store
            // const {auth} = window.moonluxStore.getState() || {roles: []}

            // // if the user's auth does not have one of the required roles
            // if (intersection(roles, auth.roles).length === 0) {
            //     // redirect to the login page
            //     // replaceState({redirectTo: nextState.location.pathname}, '/login')
            //     // replaceState({user: request.user})
            // }
        }} />
    </Route>
)
