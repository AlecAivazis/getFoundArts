// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import IconGroup from './iconGroup'
import CategoryHeader from './categoryHeader'
import BulletList from './bulletList'


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
            style,
            ...unused_props,
        } = this.props

        // the style of the category content
        let container_style
        let icon_container_style
        // if the content needs to be aligned left
        if (orientation === 'left') {
            container_style = {
                ...style,
                ...styles.container,
                ...styles.alignLeft,
            }
            icon_container_style = {
                ...styles.icon_container,
                ...{paddingRight: 50},
            }
        // otherwise the content need to be aligned right
        } else {
            container_style = {
                ...style,
                ...styles.container,
                ...styles.alignRight,
            }
            icon_container_style = {
                ...styles.icon_container,
                ...{paddingLeft: 50},
            }
        }


        // render the component
        return (
            <section style={container_style} {...unused_props}>
                <aside style={icon_container_style}>
                    <IconGroup icons={icons}/>
                </aside>
                <article style={styles.content}>
                    <CategoryHeader title={title} subtitle={subtitle} style={styles.header}/>
                    <BulletList bullets={bullets} style={styles.list_container}/>
                </article>
            </section>
        )
    }
}

const styles = {
    container: {
        padding: 100,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        color: '#212428',
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
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    list_container: {
        marginTop: 10,
        fontSize: 20,
        lineHeight: '26px',
    },
    icon_container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}


export default SplashCategory


// end of file
