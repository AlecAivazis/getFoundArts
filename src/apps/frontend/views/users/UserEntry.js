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
            <tr style={{...style, ...styles.container}} {...unusedProps}>
                <td style={styles.field}>
                    {user.name}
                </td>
                <td style={styles.field}>
                    {user.email}
                </td>
                <td style={styles.field}>
                    <a href={user.link} target='_blank'>
                        {user.link}
                    </a>
                </td>
            </tr>
        )
    }
}

const styles = {
    container: {
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
