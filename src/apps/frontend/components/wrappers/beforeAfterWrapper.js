// thirdparty imports
import React from 'react'

class BeforeAfterWrapper extends React.Component {
    // use the before/after wrapper to do the css magic
    render () {

        // grab the wrapper element styles
        const {before, after, style, ...unused_props} = this.props

        // render the component
        return (
            <span style={style} {...unused_props}>
                <span style={before} />
                {this.props.children}
                <span style={after} />
            </span>
        )
    }
}

export default BeforeAfterWrapper
