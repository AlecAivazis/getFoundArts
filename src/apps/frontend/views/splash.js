// third party imports
import React from 'react'
import Radium from 'radium'
// local imports
import SplashCategory from '../components/splash/splashCategory'


@Radium
class Splash extends React.Component {

    static propTypes = {}


    static defaultProps = {}

    categories = [
        {
            title: 'Get Seen: Visualize Your Music',
            subtitle: 'Connect with visual artists to build your band’s visual aesthetic and create',
            bullets: [
                'Album Art (CD/LP/mp3 covers)',
                'Tour Merchandise (t-shirt, poster, bag, button, etc.)',
                'Band Photography (Camera)',
                'Music Videos (Video Camera)',
                'Logo Design (Blank Logo)',

            ],
            icons: [
                {name: 'record', color: 'yellow'},
                {name: 'shirt', color: 'yellow'},
                {name: 'camera', color: 'yellow'},
                {name: 'logo', color: 'yellow'},
            ],
        },
        {
            title: 'Get Heard: Authenticate Your Brand',
            subtitle: 'With cohesive visual identification and branding you will:',
            bullets: [
                'Sell more records and merchandise',
                'Generate more plays and downloads (Spotify, Soundcloud, iTunes)',
                'Gain an audience in the video field with attention-grabbing music videos (YouTube, Vimeo)',
                'Bring more viewers to your website and social platforms with additional visual content and marketing opportunities',
            ],
            icons: [
                {name: 'spotify', color: 'yellow'},
                {name: 'itunes', color: 'yellow'},
                {name: 'soundcloud', color: 'yellow'},
                {name: 'vimeo', color: 'yellow'},
            ],
        },
        {
            title: 'Get Found: Take Your Band (and Brand) Full-throttle',
            bullets: [
                'Establish lasting relationships in the Art and Music world in both the artist and audience sphere',
                'Team with other local for joint exhibitions in art galleries and concert venues. ',
                'Relax knowing a professional, like-minded creative is handling your visual representation while you can devote your energy to recording and touring',
            ],
        },
    ]


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props
        // render the component
        return (
            <div style={styles.container_style} {...unused_props}>
                {this.categories.map((category, index) => {
                    const categoryIndex = index + 1
                    // the alignment of the category
                    const orientation = categoryIndex % 2 ? 'right' : 'left'
                    // render a category component
                    return (
                        <SplashCategory title={category.title}
                                        subtitle={category.subtitle}
                                        bullets={category.bullets}
                                        icons={category.icons}
                                        index={categoryIndex}
                                        orientation={orientation}
                                        key={index} />
                    )
                })}
            </div>
        )
    }
}

const styles = {
    container_style: {
        textAlign: 'left',
    },
}


export default Splash


// end of file
