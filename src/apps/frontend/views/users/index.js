// third party imports
import React from 'react'
import Spinner from 'react-spinkit'
// local imports

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
                <Spinner spinnerName='three-bounce' />
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
        padding: '100px 80px 80px 80px',
        boxSizing: 'border-box',
        justifyContent: 'center',
        fontSize: '64px',
    },
}


export default Login


// end of file
