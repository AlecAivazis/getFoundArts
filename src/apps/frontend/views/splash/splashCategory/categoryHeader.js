// third party imports
import React from 'react'


class CategoryHeader extends React.Component {


    static propTypes = {
        title: React.PropTypes.string.isRequired,
        subtitle: React.PropTypes.string,
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
        const {title, subtitle, ...unused_props} = this.props
        // render the component
        return (
            <header {...unused_props}>
                <h1 style={styles.title}>
                    {title}
                </h1>
                <h2 style={styles.subtitle}>
                    {subtitle}
                </h2>
            </header>
        )
    }
}

const styles = {
    title: {
        fontSize: 32,
        lineHeight: '36px',
        fontWeight: 'bold',
        marginBottom: 0,
    },
    subtitle: {
        marginTop: 10,
        fontSize: 24,
        lineHeight: '26px',
    },
}


export default CategoryHeader


// end of file
