// react imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import RootComponent from './views/root'
import SplashPage from './views/splash'
import Login from './views/login'


export default (
    <Route path='/' component={RootComponent}>
        <IndexRoute component={SplashPage} />
        <Route path='/login' component={Login}/>
    </Route>
)
