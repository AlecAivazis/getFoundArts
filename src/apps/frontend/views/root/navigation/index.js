// third party imports
import React from 'react'
import radium from 'radium'
import omit from 'lodash/object/omit'
// local imports
import Branding from './branding'
import LinkList from './linkList'


@radium
class Navigation extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        // the style of the navigation element
        const nav_style = {
            ...style,
            ...styles.nav,
        }

        // render the component
        return (
            <div style={nav_style} {...unused_props}>
                <Branding />
                <LinkList element_style={styles.links}
                          last_element_style={omit(styles.links, 'paddingRight')}/>
            </div>
        )
    }
}

const styles = {
    nav: {
        backgroundColor: 'white',
        padding: '10px 20px',
        fontSize: '24px',
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    links: {
        display: 'inline-block',
        fontSize: '18px',
        paddingRight: 20,
    },
}


export default Navigation


// end of file
