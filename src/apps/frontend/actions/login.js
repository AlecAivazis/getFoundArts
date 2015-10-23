export const SET_AUTH_INFO = 'SET_AUTH_INFO'

export default (userInfo) => {
    return {
        type: SET_AUTH_INFO,
        payload: userInfo,
    }
}
