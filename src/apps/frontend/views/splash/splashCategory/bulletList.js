// third party imports
import React from 'react'
// local imports
import Icon from '../../../components/misc/icon'


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
        const {
            bullets,
            listItemStyle,
            ...unusedProps,
        } = this.props
        // render the component
        return (
            <ul {...unusedProps}>
                {bullets.map((bullet, listIndex) => {
                    return (
                        <li key={listIndex} style={listItemStyle}>
                            <Icon name='record' listStyle={true} />
                            {bullet}
                        </li>
                    )
                })}
            </ul>
        )
    }
}


export default BulletList


// end of file
