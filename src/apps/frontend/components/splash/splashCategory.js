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
        images: React.PropTypes.arrayOf(React.PropTypes.string),
        index: React.PropTypes.number,
        orientation: React.PropTypes.oneOf(['left', 'right']),
    }

    // render the component
    render() {
        // pull out the used properties
        const {
            header,
            text,
            bullets,
            image,
            index,
            orientation,
            ...unused_props,
        } = this.props

        // the style of the category content
        let content_style
        // if the content needs to be aligned left
        if (orientation === 'left') {
            content_style = {...styles.content, ...styles.alignLeft}
        // otherwise the content need to be aligned right
        } else {
            content_style = {...styles.content, ...styles.alignRight}
        }

        // render the component
        return (
            <div style={styles.container} {...unused_props}>
                <div>
                    <IndexContainer style={styles.index} number={index}/>
                    <span style={styles.header}>
                        {header}
                    </span>
                    <div style={styles.subheader}>
                        {text}
                    </div>
                </div>
                <div style={content_style}>
                    <ul style={styles.list}>
                        {
                            bullets.map((bullet, list_index) => {
                                return (
                                    <li key={list_index}>
                                        {bullet}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        padding: 50,
        backgroundColor: 'blue',
        borderBottom: '1px solid yellow',
    },
    content: {
        display: 'flex',
    },
    alignLeft: {
        flexDirection: 'row',
    },
    alignRight: {
        flexDirection: 'row-reverse',
    },
    index: {
        marginRight: 10,
    },
    header: {
        fontSize: 26,
        backgroundColor: 'purple',
    },
    subheader: {
        marginLeft: 20,
        backgroundColor: 'grey',
    },
    list: {
        backgroundColor: 'green',
        width: '60%',
    },
}


export default SplashCategory


// end of file
