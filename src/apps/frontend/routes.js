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
import {checkRoles} from 'core/auth/client'


export default (
    <Route path='/' component={RootComponent}>
        <IndexRoute
            component={SplashPage}
        />
        <Route
            path='login'
            component={Login}
        />
        <Route
            path='users'
            component={Users}
            onEnter={(nextState, replaceState) => {
                // if the user does not have the right access role
                if (!checkRoles('admin')) {
                    // redirect them to the login page
                    replaceState(null, `/login?redirectTo=${nextState.location.pathname}`)
                }
            }}
        />
    </Route>
)
