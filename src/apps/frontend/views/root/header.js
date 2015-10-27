// third party imports
import React from 'react'
// local imports
import Branding from './branding'
import Navigation from './navigation'


class Header extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        // the style of the header element
        const header_style = {
            ...style,
            ...styles.header,
        }
        // render the component
        return (
            <header style={header_style} {...unused_props}>
                <Branding />
                <Navigation/>
            </header>
        )
    }
}

const styles = {
    header: {
        backgroundColor: 'white',
        padding: '10px 20px',
        fontSize: '24px',
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
    },
}


export default Header


// end of file
