// third party imports
import React from 'react'
import {Link} from 'react-router'
import radium from 'radium'

@radium
class GFALink extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        // merge the styles
        const link_style = {
            ...styles.link,
            ...style,
        }

        // render the component
        return (
            <Link style={link_style} {...unused_props} />
        )
    }
}


const styles = {
    link: {
        color: 'black',
        textDecoration: 'none',
    },
}


export default GFALink


// end of file
