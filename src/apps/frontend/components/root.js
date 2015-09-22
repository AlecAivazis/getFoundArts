
'use strict'

// third party imports
import React from 'react'


class RootComponent extends React.Component {

    
    static propTypes = {}


    static defaultProps = {}


    constructor(props) {
        // instantiate this
        super(props)
        // set the initial state
        this.state = {}
    }


    // called when the component is first mounted
    componentDidMount() {}


    // called before the component is removed from the dom
    componentWillUnmount() {}


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props
        // render the component
        return (
            <div {...unused_props}>
                Universal root element
            </div>
        )
    }
}


export default RootComponent


// end of file
