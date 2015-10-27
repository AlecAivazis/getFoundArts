// third party imports
import React from 'react'
// local
import Link from './navigation/link'


class Branding extends React.Component {

    // render the component
    render() {
        // render the component
        return (
            <Link {...this.props} to='/'>
                Get Found Arts
            </Link>
        )
    }
}


export default Branding


// end of file
