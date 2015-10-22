// react imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import RootComponent from './views/root'
import SplashPage from './views/splash'
import Login from './views/login'
import Users from './views/users'
import intersection from 'lodash/array/intersection'


export default (
    <Route path='/' component={RootComponent}>
        <IndexRoute component={SplashPage} />
        <Route path='login' component={Login} />
        <Route path='users' component={Users} onEnter={(nextState, replaceState) => {
            // list of roles that can access this route
            const roles = ['admin']
            // grab current user's authentication data off of redux store
            const {auth} = window.moonluxStore.getState() || {roles: []}

            // if the user's auth does not have one of the required roles
            if (intersection(roles, auth.roles).length === 0) {
                // redirect to the login page
                replaceState({redirectTo: nextState.location.pathname}, '/login')
            }
        }} />
    </Route>
)
