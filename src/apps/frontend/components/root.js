// third party imports
import React from 'react'
import Radium from 'radium'
import {RouteHandler} from 'react-router'


@Radium
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
            <div style={styles.root_container} {...unused_props}>
                <RouteHandler/>
            </div>
        )
    }
}

const styles = {
    root_container:{ 
        position: 'relative',
        minHeight: '100%',
        overflow: 'hidden',
        backgroundColor: 'red',
        maxWidth: 1024,
    }
}


export default RootComponent


// end of file
