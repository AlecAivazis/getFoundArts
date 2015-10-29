// third party imports
import React from 'react'
// local imports
import {
    FLASH_SUCCESS,
    FLASH_ERROR,
} from './constants'

class FlashMessage extends React.Component {


    render() {
        // grab the used props
        const {style, body, status, ...unusedProps} = this.props

        // render the flash message with the appropriate style
        return (
            <div
                style={{
                    ...(styles[status] || styles.baseMessageStyle),
                    ...style,
                }}
                {...unusedProps}
            >
                {body}
            </div>
        )
    }
}

const baseMessageStyle = {
    padding: 10,
}

const styles = {
    baseMessageStyle,
    [FLASH_SUCCESS]: {
        ...baseMessageStyle,
        backgroundColor: 'green',
    },
    [FLASH_ERROR]: {
        ...baseMessageStyle,
        backgroundColor: 'red',
    },
}

export default FlashMessage
