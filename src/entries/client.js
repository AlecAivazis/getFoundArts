// react imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
// local imports
import routes from 'apps/frontend/routes'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
/* eslint-enable no-unused-vars */


// render the routed application
ReactDOM.render(<Router routes={routes} />, document.getElementById('app'))
