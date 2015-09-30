// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import Icon from './misc/icon'


@radium
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
            <div style={container_style} {...unused_props}>
                <Icon name='copyright' style={styles.copyright_icon}/>
                2015 Get Found Arts All Right Reserved
            </div>
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
