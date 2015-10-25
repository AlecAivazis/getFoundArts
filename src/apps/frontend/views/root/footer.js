// third party imports
import React from 'react'
// local imports
import Icon from '../../components/misc/icon'


class Footer extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        // the footer style
        const container_style = {
            ...style,
            ...styles.container,
        }

        // render the component
        return (
            <footer style={container_style} {...unused_props}>
                <Icon name='copyright' style={styles.copyright_icon}/>
                2015 Get Found Arts All Right Reserved
            </footer>
        )
    }
}

const styles = {
    container: {
        color: '#959699',
        paddingLeft: 30,
    },
    copyright_icon: {
        marginRight: 10,
    },
}


export default Footer


// end of file
