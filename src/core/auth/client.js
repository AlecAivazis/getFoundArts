/**
 * This module handles persisting frontend authentication information after a successful login
 */


/**
 * Make sure the authentication handlers are run in a closure (so its not added to global scope)
 */
function buildClosure() {

    // unexposed reference to authentication handler
    let authHandler


    /**
     * Set the local handler to the specified one (so that it can be universally imported)
     */
    function setAuthenticationCheck(check) {
        // if the given handler is not a function
        if (typeof check !== 'function') {
            // throw an error
            throw new Error('authentication check must be a function.')
        }
        // set the authentication closure to the provided handler
        authHandler = check
    }


    /**
     * Check if the role is authenticated using the provided handler
     */
    function checkRoles(role) {
        // if there is no handler specified
        if (typeof authHandler === 'undefined') {
            // the user is not logged in
            return false
        }
        // pass the role onto the local handler
        return authHandler(role)
    }


    return {
        setAuthenticationCheck,
        checkRoles,
    }
}


export default buildClosure()
