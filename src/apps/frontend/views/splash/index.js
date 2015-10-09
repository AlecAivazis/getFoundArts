// third party imports
import React from 'react'
import Radium from 'radium'
// local imports
import SplashCategory from './splashCategory'
import SignUpForm from './signupForm'


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
                {name: 'logo', color: '#418CDB', fontSize: '12vw'},
                {name: 'camera', color: '#e72154'},
                {name: 'vinyl', color: '#475F6F'},
                {name: 'shirt', color: '#54CF3C'},
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
                {name: 'growth', color: '#4B63B0'},
            ],
        },
    ]


    constructor() {
        // instantiate this
        super()
        // the initial state
        this.state = {
            form_visible: false,
        }
        // bind various functions
        this.show_form = this.show_form.bind(this)
    }


    show_form() {
        // if the form is not showing
        if (!this.state.form_visible) {
            // toggle the form
            this.setState({
                form_visible: true,
            }, () => {
                // focus the first input
                this.refs.form.focus()
            })
        }
    }


    // render the component
    render() {
        // pull out the used properties
        const {browser, ...unused_props} = this.props
        // the list of categories
        const {categories} = this
        // the style of the form toggle button
        const form_toggle_style = !this.state.form_visible ? styles.form_toggle_open : {}
        // render the component
        return (
            <section style={styles.container} {...unused_props}>
                <header style={styles.header}>
                    <img src='/static/images/logo-charcoal.png'/>
                </header>
                {categories.map((category, index) => {
                    const category_index = index + 1
                    // the alignment of the category
                    const orientation = category_index % 2 ? 'right' : 'left'
                    // if we are not rendering the last category
                    if (index !== categories.length - 1) {
                        // apply the category style
                        var category_style = styles.categoryBorder
                    }
                    // render a category component
                    return (
                        <SplashCategory title={category.title}
                                        subtitle={category.subtitle}
                                        bullets={category.bullets}
                                        icons={category.icons}
                                        index={category_index}
                                        orientation={orientation}
                                        key={index}
                                        style={category_style}/>
                    )
                })}
                <section onClick={this.show_form}
                         style={[styles.form_container, form_toggle_style]} >
                    <div>
                        Get Started
                    </div>
                    { this.state.form_visible ? <SignUpForm ref='form'/> : '' }
                </section>
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
        background: 'radial-gradient(ellipse at center, #fcfcfc 0%,#A8ACB2 100%) #fcfcfc',
    },
    categoryBorder: {
        borderBottom: '1px solid #C8C7C7',
    },
    form_toggle_open: {
        cursor: 'pointer',
    },
    form_container: {
        backgroundColor: '#E8EDF3',
        borderTop: '1px solid #CBD0D7',
        textAlign: 'center',
        fontSize: '24px',
        color: '#898989',
        padding: 50,
    },
}


export default Splash


// end of file
