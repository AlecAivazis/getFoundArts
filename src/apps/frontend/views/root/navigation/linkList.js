// third party imports
import React from 'react'
// local imports
import Icon from 'components/misc/icon'
import colors from 'colors'


class LinkList extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {elementStyle, lastElementStyle, style, ...unusedProps} = this.props

        // render the component
        return (
            <ul style={style} {...unusedProps}>
                <li style={elementStyle}>
                    <a href='https://facebook.com/GetFoundArts' target='_blank'>
                        <Icon name='facebook' color={colors.facebook} size='2x'/>
                    </a>
                </li>
                <li style={elementStyle}>
                    <a href='https://soundcloud.com/getfoundarts' target='_blank'>
                        <Icon name='soundcloud' color={colors.soundcloud} size='2x'/>
                    </a>
                </li>
                <li style={lastElementStyle || elementStyle}>
                    <a href='https://twitter.com/GetFoundArts' target='_blank'>
                        <Icon name='twitter' color={colors.twitter} size='2x'/>
                    </a>
                </li>
            </ul>
        )
    }
}


export default LinkList


// end of file
