// third party imports
import React from 'react'
// local imports
import UList from 'components/UList'
import FlashMessage from './FlashMessage'
import quickConnect from 'core/util/quickConnect'


@quickConnect('flashMessages')
class FlashMessageContainer extends React.Component {
    render () {
        // grab the usud props
        const {style, flashMessages, ...unusedProps} = this.props

        return (
            <UList
                style={{
                    ...styles.container,
                    ...style,
                }}
                {...unusedProps}
            >
                {flashMessages.map((message) => <FlashMessage {...message} />)}
            </UList>
        )
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: 20,
        right: 20,
        width: 300,
    },
}

export default FlashMessageContainer
