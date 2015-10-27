// third party imports
import React from 'react'
// local imports
import BeforeAfterWrapper from './beforeAfterWrapper'

class Clearfix extends React.Component {
    // use the before/after wrapper to do the css magic
    render () {
        // grab the style from the component property
        const {style} = this.props

        // configure the before element
        const beforeStyle = {
            content: "' '",
            display: 'table',
        }
        // configure the after element
        const afterStyle = {
            clear: 'both',
            ...beforeStyle,
        }

        return (
            <BeforeAfterWrapper
                style={style}
                before={beforeStyle}
                after={afterStyle}
            >
                {this.props.children}
            </BeforeAfterWrapper>
        )
    }
}

export default Clearfix
