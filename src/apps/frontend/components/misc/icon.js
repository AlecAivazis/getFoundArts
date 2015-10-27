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
            listStyle,
            fontSize,
            ...unusedProps,
        } = this.props

        // build the icon style dynamically
        const iconStyle = {}

        // if they specified a click handler
        if (onClick) {
            // make sure it has the right cursor
            iconStyle.cursor = 'pointer'
        }
        // apply the specified iconStyles last
        if (style) {
            assign(iconStyle, style)
        }
        // if they specified a color
        if (color) {
            iconStyle.color = color
        }

        // if a particular size was specified for the icon
        if (fontSize) {
            iconStyle.fontSize = fontSize
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
        if (listStyle) {
            iconName += ` ${prefix}-li`
        }

        // render the icon
        return (
            <i
                className={iconName}
                style={iconStyle}
                onClick={onClick}
                {...unusedProps}
            />
        )
    }
}

// export the component
export default Icon

// end of file
