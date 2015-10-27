// third party imports
import React from 'react'
// local imports
import Branding from './branding'
import Navigation from './navigation'
import colors from 'colors'


class Header extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unusedProps} = this.props

        // render the component
        return (
            <header
                style={{
                    ...styles.header,
                    ...style,
                }}
                {...unusedProps}
            >
                <Branding />
                <Navigation />
            </header>
        )
    }
}


const styles = {
    header: {
        backgroundColor: colors.white,
        padding: '10px 20px',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}


export default Header


// end of file
