// third party imports
import React from 'react'
import Radium from 'radium'
// local imports

@Radium
class Login extends React.Component {

    static propTypes = {}


    static defaultProps = {}


    constructor() {
        // instantiate this
        super()
        // the initial state
        this.state = {}
    }


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props
        // render the root view
        return (
            <div style={styles.container}>
                user list
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
        padding: 80,
        boxSizing: 'border-box',
    }
}


export default Login


// end of file
