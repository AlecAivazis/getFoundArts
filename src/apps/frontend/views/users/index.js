// third party imports
import React from 'react'
import Spinner from 'react-spinkit'
import fetch from 'isomorphic-fetch'
import cookies from 'browser-cookies'
// local imports
import UserEntry from './UserEntry'

// the data requirements of the component
const query = `
    {
        users(role: "artist") {
            name,
            email,
        }
    }
`


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
                console.log(`there was an error: ${error}`)
            }
            if (data) {
                this.setState({
                    users: data.users
                })
            }
        })
    }


    get userList() {
        return this.state.users.map((user) => <UserEntry user={user} />)
    }

    get loadingSpinner() {
        return <Spinner spinnerName='three-bounce' style={styles.spinner} />
    }


    // render the component
    render() {
        // pull out the used properties
        const {...unused_props} = this.props

        // if we have retrieved the users show them otherwise show a spinner
        const body = this.state.users ? this.userList : this.loadingSpinner

        // render the list of users
        return (
            <div style={styles.container}>
                {body}
            </div>
        )
    }
}


const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
        padding: '100px 80px 80px 80px',
        boxSizing: 'border-box',
        justifyContent: 'flex-start',
        fontSize: '64px',
        flexDirection: 'column',
    },
    spinner: {
        textAlign: 'center',
    },
}


export default Login


// end of file
