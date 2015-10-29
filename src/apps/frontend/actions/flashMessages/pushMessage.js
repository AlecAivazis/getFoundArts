// local imports
import {FLASH_SUCCESS} from 'components/flash/constants'

export const PUSH_MESSAGE = 'PUSH_MESSAGE'

export default ({status = FLASH_SUCCESS, body}) => {
    return {
        type: PUSH_MESSAGE,
        payload: {
            body,
            status,
        },
    }
}
