// third party imports
import MediaQuery from 'mediaquery'
import transform from 'lodash/object/transform'
import keys from 'lodash/object/keys'
// local imports
import {CALCULATE_RESPONSIVE_STATE} from '../actions'

const breakpoints = {
    extra_small: 480,
    small: 768,
    medium: 992,
    large: 1200,
    infinity: Infinity,
}
const default_breakpoint = 'infinity'

const media_queries = MediaQuery.asObject(breakpoints)

function get_less_than(browser_width) {
    return transform(breakpoints, (result, breakpoint, media_type) => {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number') {
            // store wether or not it is less than the breakpoint
            result[media_type] = browser_width < breakpoint
        } else {
            result[media_type] = false
        }
    })
}


function get_greater_than(browser_width) {
    return transform(breakpoints, (result, breakpoint, media_type) => {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number') {
            // store wether or not it is less than the breakpoint
            result[media_type] = browser_width > breakpoint
        } else {
            result[media_type] = false
        }
    })
}


// get the current media type from the browser width
function get_current_media_type() {
    // loop over the keys of the media query
    const current_media = keys(media_queries).reduce((final_type, current_type) => {
        // grab the corresponding query string
        const query_string = media_queries[current_type]
        // barf if there's no window
        if (typeof window === 'undefined') {
            // return the default
            return default_breakpoint
        }
        // if the browser matches the string
        if (window.matchMedia(query_string).matches) {
            // return the current target
            return current_type
        }
        // otherwise the browser does not match so return the previous type
        return final_type
    })

    // return the current media type
    return current_media
}

function computeResponsiveState() {
    // if there is a window to use
    const browser_width = typeof window !== 'undefined' ? window.width : breakpoints[default_breakpoint]
    // compute the new responsive state
    return {
        width: browser_width,
        media_type: get_current_media_type(browser_width),
        less_than: get_less_than(browser_width),
        greater_than: get_greater_than(browser_width),
    }
}

export default function(state = computeResponsiveState(), action) {
    // if we were told to recalculate the state
    if (action.type === CALCULATE_RESPONSIVE_STATE) {
        // do so
        return computeResponsiveState()
    }
    // return the default state
    return state
}
