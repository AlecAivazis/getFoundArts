// third party imports
import React from 'react'
// local imports
import Icon from '../../../components/misc/icon'


class LinkList extends React.Component {

    // render the component
    render() {
        // pull out the used properties
        const {element_style, last_element_style, style, ...unused_props} = this.props

        // render the component
        return (
            <ul style={style} {...unused_props}>
                <li style={element_style}>
                    <a href='https://facebook.com/GetFoundArts' target='_blank'>
                        <Icon name='facebook' color='#36438B' size='2x'/>
                    </a>
                </li>
                <li style={element_style}>
                    <a href='https://soundcloud.com/getfoundarts' target='_blank'>
                        <Icon name='soundcloud' color='#FF7100' size='2x'/>
                    </a>
                </li>
                <li style={last_element_style || element_style}>
                    <a href='https://twitter.com/GetFoundArts' target='_blank'>
                        <Icon name='twitter' color='#638AC3' size='2x'/>
                    </a>
                </li>
            </ul>
        )
    }
}


export default LinkList


// end of file
