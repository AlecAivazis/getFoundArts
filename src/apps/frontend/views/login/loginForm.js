// third party imports
import React from 'react'
import radium from 'radium'
import fetch from 'isomorphic-fetch'
// import {UniversalFormComponent as MoonluxForm} from 'universal-forms'
import {UniversalFormComponent as MoonluxForm} from 'universal-forms'
// form test imports
import LoginForm from '../../../../apps/auth/forms/loginForm'


@radium
class FormComponent extends React.Component {

    constructor(...args) {
        // instantiate this
        super(...args)
    }


    submitForm(formData) {
        // post to the correct url
        fetch('/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: formData,
        // if the request was made
        }).then((response) => {
            // interpret the response as json
            return response.json()
        // handle the response
        }).then(({redirect, ...unusedResponseData}) => {
            // if the response is a redirect
            window.location = redirect
        }).catch((error) => {
            console.log(`error: ${error}`)
        })
    }



    // render the component
    render() {
        // pull out the used properties
        const {style, ...unused_props} = this.props

        const container_style = {
            ...style,
            ...styles.container,
        }


        // render the new component
        return (
            <div style={container_style} {...unused_props}>
                <h1 style={styles.header}>
                    Please log-in to view that page.
                </h1>
                <MoonluxForm
                    form={LoginForm} ref='form' {...unused_props}
                    style={styles.form}
                    onSubmit={this.submitForm}
                    fieldStyle={styles.inputContainer}
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    // action='/login'
                    submitContainerStyle={styles.submitContainer}
                />
            </div>
        )
    }
}

const styles = {
    container: {
        borderRadius: 2,
        boxShadow: `4px 4px 11px 0px rgba(219,216,216,.5)`,
        padding: 50,
        maxWidth: 650,
    },
    form: {
        textAlign: 'right',
        boxSizing: 'border-box',
    },
    inputContainer: {
        marginBottom: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        // width: '40%',
        textTransform: 'capitalize',
        boxSizing: 'border-box',
        paddingRight: 30,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '30%',
    },
    input: {
        display: 'inline-block',
        width: '50%',
        border: '1px solid #C1C1C1',
        boxSizing: 'border-box',
        padding: 10,
        resize: 'vertical',
        minHeight: 55,
    },
    header: {
        margin: '0 0 50px 0',
        textAlign: 'center',
        lineHeight: '40px',
    },
    submitContainer: {
        marginRight: '10%',
    },
}


export default FormComponent

// end of file
