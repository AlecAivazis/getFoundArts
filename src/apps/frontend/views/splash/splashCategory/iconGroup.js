// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import Icon from '../../../components/misc/icon'


@radium
class IconGroup extends React.Component {


    static propTypes = {
        icons: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    }


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
        const {icons, ...unused_props} = this.props

        // style the icons appropriatly if there is only 1
        const icon_style = icons.length === 1 ? styles.single_icon : styles.icon

        // render the component
        return (
            <div {...unused_props}>
                {icons.map(({name, color}, icon_index) => {
                    return (
                        <Icon name={name}
                              style={icon_style}
                              key={icon_index}
                              color={color} />
                    )
                })}
            </div>
        )
    }
}

const styles = {
    icon: {
        textAlign: 'center',
        fontSize: '10vw',
        width: '50%',
    },
    single_icon: {
        fontSize: 160,
        width: '100%',
    },
}


export default IconGroup


// end of file
