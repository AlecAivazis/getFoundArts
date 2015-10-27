// third party imports
import React from 'react'
import {Link} from 'react-router'

class GFALink extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, children, ...unusedProps} = this.props

        // render the component
        return (
            <Link
                style={{
                    ...styles.link,
                    ...style,
                }}
                {...unusedProps}
            >
                {children}
            </Link>
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
