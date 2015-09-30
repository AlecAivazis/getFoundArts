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
        const before_style = {
            content: "' '",
            display: 'table',
        }
        // configure the after element
        const after_style = {
            ...{clear: 'both'},
            ...before_style,
        }

        return (
            <BeforeAfterWrapper style={style} before={before_style} after={after_style}>
                {this.props.children}
            </BeforeAfterWrapper>
        )
    }
}

export default Clearfix
