// third party imports
import React from 'react'
import radium from 'radium'
import fetch from 'isomorphic-fetch'
import cookies from 'browser-cookies'
import {UniversalFormComponent as MoonluxForm} from 'universal-forms'
import intersection from 'lodash/array/intersection'
import flatten from 'lodash/array/flatten'
import isEqual from 'lodash/lang/isEqual'
import queryString from 'query-string'
// local imports
import LoginForm from 'apps/auth/forms/loginForm'
import {setAuthenticationCheck} from 'core/auth/client'
import loginAction from 'core/auth/actions/login'
import history from 'apps/frontend/history'


@radium
class FormComponent extends React.Component {

    submitForm(formData) {
        console.log(location)
        // post to the correct url
        fetch('/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'csrf-token': cookies.get('csrfToken'),
                'redirect-to': queryString.parse(location.search).redirectTo || '',
            },
            credentials: 'include',
            body: formData,
        // if the request was made
        }).then((response) => {
            // interpret the response as json
            return response.json()
        // handle the response
        }).then(({redirectTo, userInfo}) => {
            // save a reference to the redux store
            const store = window.moonluxStore
            console.log(userInfo)
            // set the authentication handler
            setAuthenticationCheck((...roles) => {
                // grab the auth data from the store
                const {auth} = typeof window !== 'undefined' ? store.getState() : {auth: {}}
                // return true if the data is unchanged and the user has the required role
                return isEqual(auth, userInfo) && intersection(auth.roles, flatten([...roles])).length > 0
            })
            // update the store with the users info
            store.dispatch(loginAction(userInfo))

            // if the response contains a redirect
            if (redirectTo && history) {
                // perform the redirect
                history.pushState(null, redirectTo)
            }
        }).catch((error) => {
            console.log(`error: ${error}`)
        })
    }


    // render the component
    render() {
        // pull out the used properties
        const {style, ...unusedProps} = this.props

        const container_style = {
            ...style,
            ...styles.container,
        }


        // render the new component
        return (
            <div style={container_style} {...unusedProps}>
                <h1 style={styles.header}>
                    Please log in to view that page.
                </h1>
                <MoonluxForm
                    form={LoginForm} ref='form' {...unusedProps}
                    style={styles.form}
                    onSubmit={this.submitForm.bind(this)}
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
