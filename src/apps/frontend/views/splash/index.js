// third party imports
import React from 'react'
import Autoprefixer from 'inline-style-prefixer'
// local imports
import SplashCategory from './splashCategory'
import SignUpForm from './signupForm'



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
                {name: 'vinyl', color: '#475F6F'},
                {name: 'logo', color: '#418CDB', fontSize: '12vw'},
                {name: 'shirt', color: '#54CF3C'},
                {name: 'camera', color: '#e72154'},
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
                {name: 'vimeo', color: '#4B9FE7'},
                {name: 'itunes', color: '#e72154', fontSize: '8.5vw'},
                {name: 'soundcloud', color: '#F35D07'},
                {name: 'spotify', color: '#56D34D', fontSize: '8.5vw'},
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
                {name: 'growth', color: '#4B63B0', fontSize: '12vw'},
            ],
        },
    ]


    constructor() {
        // instantiate this
        super()
        // the initial state
        this.state = {
            formIsVisible: false,
        }
        // bind various functions
        this.showForm = this.showForm.bind(this)
    }


    showForm() {
        // if the form is not showing
        if (!this.state.formIsVisible) {
            // toggle the form
            this.setState({
                formIsVisible: true,
            }, () => {
                // focus the first input
                this.refs.form.focus()
            })
        }
    }


    // render the component
    render() {
        // pull out the used properties
        const {...unusedProps} = this.props
        // the list of categories
        const {categories} = this
        // the style of the form toggle button
        const formToggleStyle = !this.state.formIsVisible ? styles.formToggleOpen : {}
        // render the component
        return (
            <section style={styles.container} {...unusedProps}>
                <header style={styles.header}>
                    <img
                        src='/static/images/logo-charcoal.png'
                        style={styles.headerImage}
                    />
                </header>
                {categories.map((category, index) => {
                    const categoryIndex = index + 1
                    // the alignment of the category
                    const orientation = categoryIndex % 2 ? 'right' : 'left'
                    // if we are not rendering the last category
                    if (index !== categories.length - 1) {
                        // apply the category style
                        var categoryStyle = styles.categoryBorder
                    }
                    // render a category component
                    return (
                        <SplashCategory title={category.title}
                                        subtitle={category.subtitle}
                                        bullets={category.bullets}
                                        icons={category.icons}
                                        index={categoryIndex}
                                        orientation={orientation}
                                        key={index}
                                        style={categoryStyle}/>
                    )
                })}
                <section
                    onClick={this.showForm}
                    style={[styles.formContainer, formToggleStyle]}
                >
                    <div>
                        Get Started
                    </div>
                    { this.state.formIsVisible ? <SignUpForm ref='form' /> : '' }
                </section>
            </section>
        )
    }
}

const prefixer = new Autoprefixer('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36')
const styles = prefixer.prefix({
    header: {
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: 'radial-gradient(ellipse at center, #fcfcfc 0%,#A8ACB2 100%) #fcfcfc',
    },
    headerImage: {
        width: '60%',
        maxWidth: 600,
    },
    categoryBorder: {
        borderBottom: '1px solid #C8C7C7',
    },
    formToggleOpen: {
        cursor: 'pointer',
    },
    formContainer: {
        backgroundColor: '#E8EDF3',
        borderTop: '1px solid #CBD0D7',
        textAlign: 'center',
        fontSize: '24px',
        color: '#898989',
        padding: 50,
        marginBottom: 100,
    },
})


export default Splash


// end of file
