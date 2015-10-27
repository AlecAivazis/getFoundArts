// third party imports
import React from 'react'
import omit from 'lodash/object/omit'
// local imports
import LinkList from './linkList'


class Navigation extends React.Component {

    // render the component
    render() {
        return (
            <nav {...this.props}>
                <LinkList
                    elementStyle={styles.links}
                    lastElementStyle={omit(styles.links, 'paddingRight')}
                />
            </nav>
        )
    }
}

const styles = {
    links: {
        display: 'inline-block',
        fontSize: 18,
        paddingRight: 20,
    },
}


export default Navigation


// end of file
