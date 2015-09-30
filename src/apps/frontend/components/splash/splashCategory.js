// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import IndexContainer from './indexContainer'
import Icon from '../misc/icon'

@radium
class SplashCategory extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string,
        bullets: React.PropTypes.arrayOf(React.PropTypes.string),
        icons: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string,
            color: React.PropTypes.string,
        })),
        index: React.PropTypes.number,
        orientation: React.PropTypes.oneOf(['left', 'right']),
    }

    static defaultProps = {
        icons: [],
    }

    // render the component
    render() {
        // pull out the used properties
        const {
            title,
            subtitle,
            bullets,
            icons,
            index,
            orientation,
            ...unused_props,
        } = this.props

        // the style of the category content
        let container_style
        // if the content needs to be aligned left
        if (orientation === 'left') {
            container_style = {
                ...styles.container,
                ...styles.alignLeft,
            }
        // otherwise the content need to be aligned right
        } else {
            container_style = {
                ...styles.container,
                ...styles.alignRight,
            }
        }

        // render the component
        return (
            <div style={container_style} {...unused_props}>
                <aside style={styles.icon_container}>
                    {icons.map(({name, color}, icon_index) => {
                        return (
                            <Icon name={name}
                                  style={styles.icon}
                                  key={icon_index}
                                  color={color} />
                        )
                    })}
                </aside>
                <article style={styles.content}>
                    <div style={styles.banner}>
                        <IndexContainer style={styles.index} number={index}/>
                        <div style={styles.header}>
                            <span style={styles.title}>
                                {title}
                            </span>
                            <div style={styles.subtitle}>
                                {subtitle}
                            </div>
                        </div>
                    </div>
                    <ul style={styles.list_container}>
                        {bullets.map((bullet, list_index) => {
                            return (
                                <li key={list_index} style={styles.list_element}>
                                    <Icon name='record' list_style={true} />
                                    {bullet}
                                </li>
                            )
                        })}
                    </ul>
                </article>
            </div>
        )
    }
}

const styles = {
    container: {
        padding: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E1E5E6',
        display: 'flex',
        color: '#333',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
    },
    alignLeft: {
        flexDirection: 'row',
    },
    alignRight: {
        flexDirection: 'row-reverse',
    },
    index: {
        marginRight: 20,
    },
    banner: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 32,
        lineHeight: '36px',
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 24,
        lineHeight: '26px',
    },
    list_container: {
        paddingLeft: 105 / 2 - 17, // yay styles in javascript
        marginTop: 10,
        textAlign: 'left',
        fontSize: 20,
        lineHeight: '26px',
    },
    list_element: {
        position: 'relative',
        marginLeft: '2.14286em', // magic...
    },
    icon_container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '40%',
    },
    icon: {
        textAlign: 'center',
        fontSize: 125,
        width: '50%',
    },
}


export default SplashCategory


// end of file
