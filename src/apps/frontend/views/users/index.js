// third party imports
import React from 'react'
import Spinner from 'react-spinkit'
import Autoprefixer from 'inline-style-prefixer'
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


const prefixer = new Autoprefixer('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36')
const styles = prefixer.prefix({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
        padding: '100px 80px 80px 80px',
        boxSizing: 'border-box',
        justifyContent: 'center',
        fontSize: '64px',
    },
})


export default Login


// end of file
