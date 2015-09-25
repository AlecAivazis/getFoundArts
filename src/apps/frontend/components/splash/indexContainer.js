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
        const {number, ...unused_props} = this.props
        // render the component
        return (
            <span style={styles.container} {...unused_props}>
                {number}
            </span>
        )
    }
}

const styles = {
    container: {
        background: 'blue',
    },
}


export default IndexContainer


// end of file
