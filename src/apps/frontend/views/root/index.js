// third party imports
import React from 'react'
import Radium from 'radium'
// local imports
import Header from './header'
import Footer from './footer'
import ResponsiveContainer from '../../components/responsiveContainer'


@Radium
class RootComponent extends React.Component {

    static propTypes = {}


    static defaultProps = {}


    constructor(props) {
        // instantiate this
        super(props)
        // set the initial state
        this.state = {}
    }


    // called when the component is first mounted
    componentDidMount() {}


    // called before the component is removed from the dom
    componentWillUnmount() {}


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props

        // render the component
        return (
            <ResponsiveContainer style={styles.root_container} {...unused_props}>
                <Header />
                <main style={styles.main_content}>
                    {this.props.children}
                </main>
                <Footer style={styles.footer} />
            </ResponsiveContainer>
        )
    }
}

// the height of the footer
const footer_height = 50

const styles = {
    root_container: {
        position: 'relative',
        minHeight: '100%',
        overflow: 'hidden',
        paddingBottom: footer_height + 30,
    },
    main_content: {
        width: '100%',
    },
    footer: {
        backgroundColor: '#212428',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: footer_height,
    },
}


export default RootComponent


// end of file
