// third party imports
import React from 'react'
import radium from 'radium'

@radium
class SplashCategory extends React.Component {

    static propTypes = {
        header: React.PropTypes.string,
        text: React.PropTypes.string,
        bullets: React.PropTypes.arrayOf(React.PropTypes.string),
        image: React.PropTypes.string,
        index: React.PropTypes.number,
    }

    // render the component
    render() {
        // pull out the used properties
        const {header, text, bullets, image, index, ...unused_props} = this.props
        // render the component
        return (
            <div {...unused_props}>
                <span style={styles.index}>
                    {index}
                </span>
                {header}
            </div>
        )
    }
}

const styles = {
    index: {
        marginRight: 10,
    }
}


export default SplashCategory


// end of file
