// third party imports
import React from 'react'


class UserEntry extends React.Component {


    static propTypes = {
        user: React.PropTypes.object.isRequired,
    }


    // render the component
    render() {
        // pull out the used properties
        const {user, style, ...unusedProps} = this.props
        // render the component
        return (
            <div style={{...style, ...styles.container}} {...unusedProps}>
                <span style={styles.field}>
                    {user.name}
                </span>
                <span style={styles.field}>
                    {user.email}
                </span>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        fontSize: '24px',
        height: 35,
        alignItems: 'center',
    },
    field: {
        marginRight: 30,
    }
}


export default UserEntry


// end of file
