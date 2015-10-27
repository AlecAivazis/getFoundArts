// third party imports
import React from 'react'
import {UniversalFormComponent as MoonluxForm} from 'universal-forms'
import queryString from 'query-string'
// local imports
import LoginForm from 'apps/auth/forms/loginForm'
import loginAction from 'core/auth/actions/login'
import colors from 'colors'


class FormComponent extends React.Component {

    submitForm({email, password}) {
        // save a reference to the redux store
        const store = window.moonluxStore
        // log in the user with the form data
        store.dispatch(loginAction({
            email,
            password,
            redirectTo: queryString.parse(location.search).redirectTo || '/',
        }))
    }


    // render the component
    render() {
        // pull out the used properties
        const {style, ...unusedProps} = this.props


        // render the new component
        return (
            <div
                {...unusedProps}
                style={{
                    ...styles.container,
                    ...style,
                }}
            >
                <h1 style={styles.header}>
                    Please log in to view that page.
                </h1>
                <MoonluxForm
                    {...unusedProps}
                    form={LoginForm}
                    ref='form'
                    style={styles.form}
                    onSubmit={this.submitForm.bind(this)}
                    fieldStyle={styles.inputContainer}
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    submitContainerStyle={styles.submitContainer}
                />
            </div>
        )
    }
}


const styles = {
    container: {
        borderRadius: 2,
        boxShadow: `4px 4px 11px 0px ${colors.loginFormContainerShadow}`,
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
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '30%',
    },
    input: {
        display: 'inline-block',
        width: '50%',
        border: `1px solid ${colors.formInputBorder}`,
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
