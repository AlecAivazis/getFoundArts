export const PUSH_MESSAGE = 'PUSH_MESSAGE'

export default ({status, body}) => {
    console.log('pushing message')
    return {
        type: PUSH_MESSAGE,
        payload: {
            body,
            status,
        }
    }
}
