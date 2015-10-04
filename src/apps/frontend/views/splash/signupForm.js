// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
import radium from 'radium'
// form test imports
import SignUpForm from '../../../../forms/signupForm'
import MoonluxForm from '../../../../forms/FormComponent'

@radium
class FormComponent extends React.Component {

    constructor() {
        // instantiate this
        super()
        // bind various functions
        this.focus = this.focus.bind(this)
    }


    // focus on the contact menu
    focus() {
        this.refs.form.focus()
    }


    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props
        // render the new component
        return (
            <MoonluxForm form={SignUpForm} ref='form' {...unused_props}
                         fieldStyle={styles.input_container}
                         labelStyle={styles.label}
                         inputStyle={styles.input}
                         style={{...styles.form, ...style}} />
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
        resize: 'vertical',
        minHeight: 55,
    },
}


export default FormComponent
FormComponent

// end of file
