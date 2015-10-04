// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
import radium from 'radium'


@radium
class SignUpForm extends React.Component {


    static propTypes = {}


    static defaultProps = {}

    constructor() {
        // instantiate this
        super()
        // bind various functions
        this.focus = this.focus.bind(this)
    }


    // focus on the contact menu
    focus() {
        ReactDOM.findDOMNode(this.refs.first_input).focus()
    }


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props
        // render the component
        return (
            <form style={styles.form} {...unused_props}>
                <div style={styles.input_container}>
                    <label htmlFor='name' style={styles.label}>
                        name:
                    </label>
                    <input type='text' id='name' style={styles.input} ref='first_input'/>
                </div>
                <div style={styles.input_container}>
                    <label htmlFor='email' style={styles.label}>
                        e-mail:
                    </label>
                    <input type='text' id='email' style={styles.input}/>
                </div>
                <div style={styles.input_container}>
                    <label htmlFor='link' style={styles.label}>
                        link:
                    </label>
                    <input type='text' id='link' style={styles.input}/>
                </div>
                <div style={styles.input_container}>
                    <label htmlFor='message' style={styles.label}>
                        message (optional):
                    </label>
                    <textarea type='text' id='message' style={[styles.input, styles.textarea]}/>
                </div>
                <div style={styles.submit_container}>
                    <span style={styles.submit_button}>
                        send
                    </span>
                </div>
            </form>
        )
    }
}

const styles = {
    form: {
        marginTop: 50,
        textAlign: 'right',
    },
    input_container: {
        marginBottom: 30,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    label: {
        display: 'inline-block',
        textAlign: 'left',
        width: '40%',
        textTransform: 'capitalize',
        boxSizing: 'border-box',
        paddingRight: 30,
        paddingTop: 5,
    },
    input: {
        display: 'inline-block',
        width: '60%',
        border: '1px solid #C1C1C1',
        boxSizing: 'border-box',
        padding: 10,
    },
    textarea: {
        resize: 'vertical',
        minHeight: 55,
    },
    submit_container: {
        textAlign: 'right',
        marginTop: 30,
    },
    submit_button: {
        backgroundColor: '#2F5EBC',
        padding: 20,
        width: 150,
        display: 'inline-block',
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
        textTransform: 'capitalize',
    },
}


export default SignUpForm


// end of file
