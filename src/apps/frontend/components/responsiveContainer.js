// third party imports
import React from 'react'
import throttle from 'lodash/function/throttle'
// local imports
import {calculateResponsiveState} from '../actions'
import store from '../store'


class ResponsiveContainer extends React.Component {

    constructor(props, ...args) {
        // instantiate this
        super(props, ...args)

        // default to 100ms throttle time
        let throttle_time = 100
        // if throttle time was passed as prop
        if (typeof props.throttle_time !== 'undefined') {
            // use that throttle time instead
            throttle_time = props.throttle_time
        }

        // set the initial state
        this.state = {
            resize_handler: throttle(() => {
                // tell the store to recalculate the responsive state
                store.dispatch(calculateResponsiveState())
            // make sure the handler doesn't fire continuously
            }, throttle_time),
        }
    }


    // called when the component is first mounted
    componentDidMount() {
        // set the resize handler
        window.addEventListener('resize', this.state.resize_handler)
        // set the initial state
        this.state.resize_handler()
    }


    // called before the component is removed from the dom
    componentWillUnmount() {
        // remove the resize handler
        window.removeEventListener('resize', this.state.resize_handler)
    }


    // render the component
    render() {
        // pull out the used properties
        const {
            children,
            // pull out throttle time (it is used in constructor)
            throttle_time,
            ...unused_props,
        } = this.props

        // render the component
        return (
            <div {...unused_props}>
                {children}
            </div>
        )
    }
}


export default ResponsiveContainer

// end of file
