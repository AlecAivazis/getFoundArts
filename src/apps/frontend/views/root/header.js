// third party imports
import React from 'react'
import Autoprefixer from 'inline-style-prefixer'
import {Link} from 'react-router'
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
                <Link to='/users'>Users</Link>
                <Branding />
                <Navigation/>
            </header>
        )
    }
}

const prefixer = new Autoprefixer('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36')
const styles = prefixer.prefix({
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
    },
})


export default Header


// end of file
