// third party imports
import React from 'react'
// local imports
import Icon from 'components/misc/icon'
import colors from 'colors'


class Footer extends React.Component {
    // render the component
    render() {
        // pull out the used properties
        const {style, ...unusedProps} = this.props

        // render the component
        return (
            <footer
                style={{
                    ...style,
                    ...styles.container,
                }}
                {...unusedProps}
            >
                <Icon name='copyright' style={styles.copyrightIcon} />
                2015 Get Found Arts All Right Reserved
            </footer>
        )
    }
}


const styles = {
    container: {
        color: colors.grey2,
        backgroundColor: colors.grey3,
        padding: 30,
    },


    copyrightIcon: {
        marginRight: 10,
    },
}


export default Footer


// end of file
