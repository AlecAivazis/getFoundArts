// third party imports
import React from 'react'
import Radium from 'radium'


@Radium
class Splash extends React.Component {

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
            <div style={styles.container_style} {...unused_props}>
                foo bar
            </div>
        )
    }
}

const styles = {
    container_style: {
        textAlign: 'left',
    },
}


export default Splash


// end of file
