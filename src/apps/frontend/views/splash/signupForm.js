// third party imports
import React from 'react'
import fetch from 'isomorphic-fetch'
import cookies from 'browser-cookies'
// local imports
import {UniversalFormComponent as MoonluxForm} from 'universal-forms'
import SignUpForm from 'apps/auth/forms/signupForm'
import colors from 'colors'
import {actions as alertActions} from 'redux-alerts'

class FormComponent extends React.Component {

    constructor(...args) {
        // instantiate this
        super(...args)
        // bind various functions
        this.focus = this.focus.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }


    // focus on the contact menu
    focus() {
        this.refs.form.focus()
    }


    submitForm(formData) {
        // post to the correct url
        fetch('/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'csrf-token': cookies.get('csrfToken'),
            },
            body: formData,
        // if the request was made
        }).then((response) => {
            // use the response as text
            return response.text()
        // handle the response
        }).then(() => {
            // hide the form
            this.props.hideForm()
            // add the success message to the store
            window.moonluxStore.dispatch(alertActions.pushAlert({
                body: "Thanks for signing up! We'll be in contact soon.",
            }))
        })
    }


    // render the component
    render() {
        // pull out the used properties
        const {style, ...unusedProps} = this.props
        // render the new component
        return (
            <MoonluxForm
                {...unusedProps}
                ref='form'
                form={SignUpForm}
                onSubmit={this.submitForm}
                fieldStyle={styles.inputContainer}
                labelStyle={styles.label}
                inputStyle={styles.input}
                resultAsString={true}
                style={{
                    ...styles.form,
                    ...style,
                }}
            />
        )
    }
}


const styles = {
    form: {
        marginTop: 50,
        textAlign: 'right',
    },
    inputContainer: {
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
        border: `1px solid ${colors.formInputBorder}`,
        boxSizing: 'border-box',
        padding: 10,
        resize: 'vertical',
        minHeight: 55,
        fontSize: 'medium',
    },
}


export default FormComponent

// end of file
