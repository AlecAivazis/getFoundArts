// third party imports
import React from 'react'
// local imports
import colors from 'colors'
import {
    FLASH_SUCCESS,
    FLASH_ERROR,
    FLASH_ALERT,
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
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    boxShadow: `4px 4px 11px 0px ${colors.flashMessageContainerShadow}`,
}

const styles = {
    baseMessageStyle,
    [FLASH_SUCCESS]: {
        ...baseMessageStyle,
        backgroundColor: colors.flashMessageSuccesBackground,
        color: colors.flashMessageSuccesFontColor,
    },
    [FLASH_ERROR]: {
        ...baseMessageStyle,
        backgroundColor: colors.flashMessageErrorBackground,
        color: colors.flashMessageErrorFontColor,
    },
    [FLASH_ALERT]: {
        ...baseMessageStyle,
        backgroundColor: colors.flashMessageAlertBackground,
        color: colors.flashMessageAlertFontColor,
    },
}

export default FlashMessage
