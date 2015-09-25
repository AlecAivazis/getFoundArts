// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import IndexContainer from './indexContainer'

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
            <div style={styles.container} {...unused_props}>
                <IndexContainer style={styles.index} number={index}/>
                <span style={styles.header}>
                    {header}
                </span>
                <div>
                    {text}
                </div>
                <ul>
                    {
                        bullets.map((bullet) => {
                            return (
                                <li key={bullet.replace(/\s/g, '_')}>
                                    {bullet}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const styles = {
    container: {
        textAlign: 'center',
        padding: 50,
    },
    index: {
        marginRight: 10,
    },
    header: {
        fontSize: 26,
    },
}


export default SplashCategory


// end of file
