// third party imports
import React from 'react'
import Radium from 'radium'
// local imports
import SplashCategory from './splashCategory'


@Radium
class Splash extends React.Component {

    static propTypes = {}


    static defaultProps = {}


    categories = [
        {
            title: 'Get Seen: Visualize Your Music',
            subtitle: 'Connect with visual artists to build your band’s visual aesthetic and create',
            bullets: [
                'Album Art',
                'Tour Merchandise',
                'Band Photography',
                'Music Videos',
                'Logo Design',
            ],
            icons: [
                {name: 'vinyl', color: '#4B63B0'},
                {name: 'shirt', color: '#E6E000'},
                {name: 'camera', color: '#D37530'},
                {name: 'logo', color: '#6B9B42'},
            ],
        },
        {
            title: 'Get Heard: Authenticate Your Brand',
            subtitle: 'With cohesive visual identification and branding you will:',
            bullets: [
                'Sell more records and merchandise',
                'Generate more plays and downloads',
                'Gain an audience in the video field with attention-grabbing music videos',
                'Bring more viewers to your website and social platforms with additional visual content and marketing opportunities',
            ],
            icons: [
                {name: 'spotify', color: '#6B9B42'},
                {name: 'itunes', color: '#D37530'},
                {name: 'soundcloud', color: '#E6E000'},
                {name: 'vimeo', color: '#4B63B0'},
            ],
        },
        {
            title: 'Get Found: Take Your Band (and Brand) Full-throttle',
            bullets: [
                'Establish lasting relationships in the Art and Music world.',
                'Team with local artists for joint showcases in art galleries and concert venues.',
                'Focus on your music while like-minded creatives handle aspects of your visual representation.',
            ],
            icons: [
                {name: 'growth', color: '#4B63B0'},
            ],
        },
    ]


    // render the component
    render() {
        // pull out the used properties
        const {browser, ...unused_props} = this.props
        // render the component
        return (
            <section style={styles.container} {...unused_props}>
                <header id='header' style={styles.header}>
                    <img src='/static/images/logo-charcoal.png'/>
                </header>
                {this.categories.map((category, index) => {
                    const category_index = index + 1
                    // the alignment of the category
                    const orientation = category_index % 2 ? 'right' : 'left'
                    // render a category component
                    return (
                        <SplashCategory title={category.title}
                                        subtitle={category.subtitle}
                                        bullets={category.bullets}
                                        icons={category.icons}
                                        index={category_index}
                                        orientation={orientation}
                                        key={index} />
                    )
                })}
            </section>
        )
    }
}


const styles = {
    header: {
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
}


export default Splash


// end of file
