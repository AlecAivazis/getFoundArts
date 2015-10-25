// third party imports
import React from 'react'
// local
import Link from './navigation/link'


class Branding extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        // the style of the element
        const branding_style = {
            ...style,
            ...styles.container,
        }


        // render the component
        return (
            <span style={branding_style} {...unused_props}>
                <Link to='/'>
                    Get Found Arts
                </Link>
            </span>
        )
    }
}

const styles = {
    container: {

    },
}


export default Branding


// end of file
