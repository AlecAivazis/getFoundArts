// third party imports
import React from 'react'
import Spinner from 'react-spinkit'
import fetch from 'isomorphic-fetch'
import cookies from 'browser-cookies'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import reduxAlerts from 'redux-alerts'
// local imports
import UserEntry from './UserEntry'
import colors from 'colors'

// grab the used redux actions/creators
const {pushAlert} = reduxAlerts.actions
const {alert_error} = reduxAlerts.constants


// the data requirements of the component
const query = `
    {
        users(role: "artist") {
            name,
            email,
            link,
        }
    }
`

@connect()
class Login extends React.Component {

    static propTypes = {}


    static defaultProps = {}


    constructor() {
        // instantiate this
        super()
        // the initial state
        this.state = {}
    }

    componentDidMount() {
        fetch(`/api/graphql?query=${query}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'csrf-token': cookies.get('csrfToken'),
            },
        })
        .then((response) => response.json())
        .then(({data, error}) => {
            // if there was an error
            if (error) {
                // create an error alert message
                this.props.dispatch(pushAlert({
                    body: "Thanks for signing up! We'll be in contact soon.",
                    status: alert_error,
                }))
            }
            if (data) {
                this.setState({
                    users: data.users,
                })
            }
        })
    }


    get userList() {
        return (
            <table style={styles.table}>
                <thead style={styles.tableHeader}>
                    <tr>
                        <th style={styles.tableHeaderElement}> name </th>
                        <th style={styles.tableHeaderElement}> email </th>
                        <th style={styles.tableHeaderElement}> link </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) =>
                        <UserEntry
                            key={index}
                            user={user}
                        />
                    )}
                </tbody>
            </table>
        )
    }

    get loadingSpinner() {
        return <Spinner spinnerName='three-bounce' style={styles.spinner} />
    }


    // render the component
    render() {
        // if we have retrieved the users show them otherwise show a spinner
        const body = this.state.users ? this.userList : this.loadingSpinner

        // render the list of users
        return (
            <div style={styles.container}>
                <Helmet title='Member List | Get Found Arts' />
                {body}
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        backgroundColor: colors.white,
        height: '100%',
        boxSizing: 'border-box',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 64,
        flexDirection: 'column',
    },
    spinner: {
        textAlign: 'center',
    },
    table: {
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        padding: '100px 80px 80px 80px',
    },
    tableHeaderElement: {
        fontSize: 32,
        paddingBottom: 20,
        textTransform: 'capitalize',
    },
}


export default Login


// end of file
