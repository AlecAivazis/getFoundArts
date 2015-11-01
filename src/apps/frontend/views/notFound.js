// third party imports
import React from 'react'
// local imports
import colors from 'colors'


export default () => (
    <div style={styles.container}>
        <h3 style={styles.title}>
            Not Found
        </h3>
        <span style={styles.content}>
            Looks like there's nothing here!
        </span>
    </div>
)


const styles = {
    container: {
        backgroundColor: colors.white,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
    },

    content: {
        textAlign: 'center',
        fontSize: 30,
    },
}
