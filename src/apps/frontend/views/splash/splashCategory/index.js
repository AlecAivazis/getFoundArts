// third party imports
import React from 'react'
import {connect} from 'react-redux'
// local imports
import CategoryHeader from './categoryHeader'
import BulletList from './bulletList'
import UList from 'components/UList'
import Icon from 'components/misc/icon'
import colors from 'colors'


@connect(({browser}) => ({browser}))
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
            browser,
            title,
            subtitle,
            bullets,
            icons,
            index,
            orientation,
            style,
            ...unusedProps,
        } = this.props

        let containerStyle
        let iconContainerStyle
        let iconListItemStyle
        let iconStyle
        let contentStyle
        let bulletListStyle
        let headerStyle
        let iconListStyle
        if (browser.lessThan.medium) {
            // use smaller screen styling
            containerStyle = styles.containerMedium
            iconContainerStyle = styles.iconContainerMedium
            iconListItemStyle = styles.iconListItemMedium
            iconStyle = styles.iconMedium
            contentStyle = styles.contentMedium
            bulletListStyle = styles.bulletListMedium
            headerStyle = styles.headerMedium
            iconListStyle = styles.iconListMedium
        } else {
            // use larger screen styling
            iconListItemStyle = styles.iconListItemLarge
            iconStyle = styles.iconLarge
            contentStyle = styles.contentLarge
            bulletListStyle = styles.bulletListLarge
            headerStyle = styles.headerLarge
            iconListStyle = styles.iconListLarge

            if (orientation === 'left') {
                // use left styling
                iconContainerStyle = styles.iconContainerLeft
                containerStyle = styles.containerLeft
            } else {
                // use right styling
                iconContainerStyle = styles.iconContainerRight
                containerStyle = styles.containerRight
            }
        }


        // render the component
        return (
            <section style={{...containerStyle, ...style}} {...unusedProps}>
                <aside style={iconContainerStyle}>
                    <UList
                        style={iconListStyle}
                        listItemStyle={iconListItemStyle}
                    >
                        {icons.map(({name, color, fontSize}, key) => (
                            <Icon
                                name={name}
                                style={iconStyle}
                                key={key}
                                color={color}
                                fontSize={fontSize}
                            />
                        ))}
                    </UList>
                </aside>
                <article style={contentStyle}>
                    <CategoryHeader
                        title={title}
                        subtitle={subtitle}
                        style={headerStyle}
                    />
                    <BulletList
                        bullets={bullets}
                        style={bulletListStyle}
                        listItemStyle={styles.bulletListItem}
                    />
                </article>
            </section>
        )
    }
}


const containerBase = {
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    color: colors.splashCategoryText,
    display: 'flex',
}

const containerLargeBase = {
    ...containerBase,
    padding: 100,
}

const iconContainerBase = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const iconContainerLargeBase = {
    ...iconContainerBase,
    width: '40%',
}

const iconListItemBase = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const iconBase = {
    textAlign: 'center',
    marginBottom: 30,
}

const contentBase = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const bulletListBase = {
    boxSizing: 'border-box',
    marginTop: 10,
    fontSize: 20,
    lineHeight: '26px',
    width: '100%',
}

const headerBase = {
    display: 'flex',
    flexDirection: 'column',
}

const iconListBase = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
}


const styles = {
    containerLeft: {
        ...containerLargeBase,
        flexDirection: 'row',
    },
    containerRight: {
        ...containerLargeBase,
        flexDirection: 'row-reverse',
    },
    containerMedium: {
        ...containerBase,
        padding: '80px 0',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        width: '100%',
    },
    iconContainerLeft: {
        ...iconContainerLargeBase,
        paddingRight: 50,
    },
    iconContainerRight: {
        ...iconContainerLargeBase,
        paddingLeft: 50,
    },
    iconContainerMedium: {
        ...iconContainerBase,
    },
    iconListItemLarge: {
        ...iconListItemBase,
        width: '50%',
    },
    iconListItemMedium: {
        ...iconListItemBase,
        width: '25%',
    },
    iconLarge: {
        ...iconBase,
        fontSize: '10vw',
    },
    iconMedium: {
        ...iconBase,
        fontSize: '10vw',
    },
    contentLarge: {
        ...contentBase,
        width: '60%',
    },
    contentMedium: {
        ...contentBase,
        marginBottom: 40,
    },
    iconListLarge: {
        ...iconListBase,
    },
    iconListMedium: {
        ...iconListBase,
        padding: '0 10%',
    },
    headerLarge: {
        ...headerBase,
        width: '100%',
    },
    headerMedium: {
        ...headerBase,
        width: '70%',
    },
    bulletListLarge: {
        ...bulletListBase,
    },
    bulletListMedium: {
        ...bulletListBase,
        padding: '0 14%',
    },
    bulletListItem: {
        position: 'relative',
        marginLeft: '2.14286em', // magic...
    },
}


export default SplashCategory


// end of file
