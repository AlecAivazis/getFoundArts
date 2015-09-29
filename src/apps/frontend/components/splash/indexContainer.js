// third party imports
import React from 'react'
import radium from 'radium'

@radium
class IndexContainer extends React.Component {

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
        const {number, style, ...unused_props} = this.props
        // the style of the container
        const container_style = {...style, ...styles.container}
        // render the component
        return (
            <span style={container_style} {...unused_props}>
                {number}
            </span>
        )
    }
}

const styles = {
    container: {
        width: 105,
        height: 120,
        backgroundImage: 'url("/static/images/splashIndexBackground.png")',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
    },
}


export default IndexContainer


// end of file
