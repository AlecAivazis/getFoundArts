// third party imports
import React from 'react'
// local imports
import Header from './header'
import Footer from './footer'
import FlashMessageContainer from 'components/flash/FlashMessageContainer'


class RootComponent extends React.Component {
    // render the component
    render() {
        // pull out the used properties
        const {children, ...unusedProps} = this.props

        // render the component
        return (
            <div style={styles.container} {...unusedProps}>
                <FlashMessageContainer/>
                <Header />
                <main style={styles.content}>
                    {children}
                </main>
                <Footer />
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },

    content: {
        flexGrow: 1,
    },
}


export default RootComponent


// end of file
