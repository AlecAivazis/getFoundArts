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
            header: 'Get Seen: Visualize Your Music',
            text: 'Connect with visual artists to build your band’s visual aesthetic and create',
            bullets: [
                'Album Art (CD/LP/mp3 covers)',
                'Tour Merchandise (t-shirt, poster, bag, button, etc.)',
                'Band Photography (Camera)',
                'Music Videos (Video Camera)',
                'Logo Design (Blank Logo)',

            ],
            images: [
                '/static/images/icons/record.png',
                '/static/images/icons/shirt.png',
                '/static/images/icons/camera.png',
                '/static/images/icons/logo.png',
            ],
        },
        {
            header: 'Get Heard: Authenticate Your Brand',
            text: 'With cohesive visual identification and branding you will:',
            bullets: [
                'Sell more records and merchandise',
                'Generate more plays and downloads (Spotify, Soundcloud, iTunes)',
                'Gain an audience in the video field with attention-grabbing music videos (YouTube, Vimeo)',
                'Bring more viewers to your website and social platforms with additional visual content and marketing opportunities',
            ],
            images: ['foo'],
        },
        {
            header: 'Get Found: Take Your Band (and Brand) Full-throttle',
            text: '',
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
                    const orientation = categoryIndex % 2 ? 'left' : 'right'
                    // render a category component
                    return (
                        <SplashCategory header={category.header}
                                        text={category.text}
                                        bullets={category.bullets}
                                        image={category.image}
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
