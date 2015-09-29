// a basic icon component used to hide FontAwesome classes and other "logic"

import React from 'react'
import assign from 'lodash/object/assign'

class Icon extends React.Component {

    render() {
        // the used props
        const {
            style,
            color,
            onClick,
            size,
            name,
            list_style,
        ...unused_props} = this.props

        // build the icon style dynamically
        const icon_style = {}

        // if they specified a click handler
        if (onClick) {
            // make sure it has the right cursor
            icon_style.cursor = 'pointer'
        }
        // apply the specified icon_styles last
        if (style) {
            assign(icon_style, style)
        }
        // if they specified a color
        if (color) {
            icon_style.color = color
        }

        // the base icon class
        const prefix = 'icon'
        // start with the basic icon based on the required name
        let iconName = `${prefix} ${prefix}-${name}`
        // if the user wants a different size
        if (size) {
            // add the sizing option to the icon
            iconName += ` ${prefix}-${size}`
        }
        // if the icon is to be used as a list style
        if (list_style) {
            iconName += ` ${prefix}-li`
        }

        // render the icon
        return (
            <i className={iconName}
               style={icon_style}
               onClick={onClick}
               {...unused_props} />
        )
    }
}

// export the component
export default Icon

// end of file