// third party imports
import React from 'react'
import Helmet from 'react-helmet'
import {AlertContainer} from 'redux-alerts'
import {connect} from 'react-redux'
// local imports
import Header from './header'
import Footer from './footer'


@connect(({alerts}) => ({alerts}))
class RootComponent extends React.Component {
    // render the component
    render() {
        // pull out the used properties
        const {alerts, dispatch, children, ...unusedProps} = this.props

        // render the component
        return (
            <div style={styles.container} {...unusedProps}>
                <Helmet title='Get Found Arts' />
                <AlertContainer
                    alerts={alerts}
                    dispatch={dispatch}
                    duration={7000}
                />
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
        display: 'flex',
        flexDirection: 'column',
    },
}


export default RootComponent


// end of file
