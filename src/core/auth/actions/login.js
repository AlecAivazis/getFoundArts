export const SET_AUTH_INFO = 'SET_AUTH_INFO'

export default (userInfo) => {
    // update the cookie

    // create the action
    return {
        type: SET_AUTH_INFO,
        payload: userInfo,
    }
}
