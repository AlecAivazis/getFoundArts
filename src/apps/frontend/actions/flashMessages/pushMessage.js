export const PUSH_MESSAGE = 'PUSH_MESSAGE'

export default ({body, status}) => {
    return {
        type: PUSH_MESSAGE,
        payload: {
            body,
            status,
        }
    }
}
