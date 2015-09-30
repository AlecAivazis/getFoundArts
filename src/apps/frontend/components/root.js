// third party imports
import React from 'react'
import Radium from 'radium'


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
            <div style={styles.root_container} {...unused_props}>
                <div style={styles.nav}>
                    Get Found Arts
                </div>
                <div style={styles.main_content}>
                    {this.props.children}
                </div>
                <div style={styles.footer}>
                    footer stuff
                </div>
            </div>
        )
    }
}

// the height of the footer
const footer_height = 100

const styles = {
    root_container: {
        position: 'relative',
        minHeight: '100%',
        overflow: 'hidden',
        paddingBottom: footer_height + 20,
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
    nav: {
        backgroundColor: 'white',
        padding: '10px 10px 10px 20px',
        fontSize: '24px',
    },
}


export default RootComponent


// end of file
