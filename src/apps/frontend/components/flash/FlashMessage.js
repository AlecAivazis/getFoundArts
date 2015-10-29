// third party imports
import React from 'react'

const FLASH_SUCCESS = 'success'
const FLASH_ERROR = 'error'

class FlashMessage extends React.Component {
    render() {
        // grab the used props
        const {style, body, status, ...unusedProps} = this.props

        // the style of the error message
        return (
            <div
                style={{
                    ...styles[status],
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
