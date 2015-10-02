// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import Icon from '../../../components/misc/icon'


@radium
class BulletList extends React.Component {


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
        const {bullets, ...unused_props} = this.props
        // render the component
        return (
            <ul {...unused_props}>
                {bullets.map((bullet, list_index) => {
                    return (
                        <li key={list_index} style={styles.list_element}>
                            <Icon name='record' list_style={true} />
                            {bullet}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const styles = {
    list_element: {
        position: 'relative',
        marginLeft: '2.14286em', // magic...
    },
}


export default BulletList


// end of file
