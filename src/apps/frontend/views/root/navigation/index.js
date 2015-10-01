// third party imports
import React from 'react'
import radium from 'radium'
import omit from 'lodash/object/omit'
// local imports
import LinkList from './linkList'


@radium
class Navigation extends React.Component {

    // render the component
    render() {
        // grab the used props
        const {...unused_props} = this.props

        // render the component
        return (
            <nav {...unused_props}>
                <LinkList element_style={styles.links}
                          last_element_style={omit(styles.links, 'paddingRight')}/>
            </nav>
        )
    }
}

const styles = {
    links: {
        display: 'inline-block',
        fontSize: '18px',
        paddingRight: 20,
    },
}


export default Navigation


// end of file
