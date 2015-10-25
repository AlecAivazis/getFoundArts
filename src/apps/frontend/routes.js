// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import once from 'lodash/function/once'
// local imports
import RootComponent from './views/root'
import SplashPage from './views/splash'
import Login from './views/login'
import Users from './views/users'
import {checkRoles} from 'core/auth/client'
import loginAction from 'core/auth/actions/login'

const loadByToken = once(() => {
    window.moonluxStore.dispatch(loginAction({
        jwt: true,
    }))
})
        // onEnter={(nextState, replaceState) => {
        //     if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        //         // log in the user
        //         loadByToken()
        //     }
        // }

export default (
    <Route path='/'
        component={RootComponent}
    >
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
