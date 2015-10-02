// third party imports
import MediaQuery from 'mediaquery'
import transform from 'lodash/object/transform'
import keys from 'lodash/object/keys'
// local imports
import {CALCULATE_RESPONSIVE_STATE} from '../actions'


// custom breakpoints for responsive design
const breakpoints = {
    extra_small: 480,
    small: 768,
    medium: 992,
    large: 1200,
    infinity: Infinity,
}

// breakpoint to default to when no `window` present
const default_breakpoint = 'infinity'

// media queries associated with custom breakpoints
const media_queries = MediaQuery.asObject(breakpoints)


/**
 * Compute the `less_than` object based on the browser width.
 * @arg {number} browser_width - Width of the browser.
 * @returns {object} The `less_than` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is less than the breakpoint.
 */
function getLessThan(browser_width) {
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


/**
 * Compute the `greater_than` object based on the browser width.
 * @arg {number} browser_width - Width of the browser.
 * @returns {object} The `greater_than` object.  Its keys are the same as the
 * keys of the breakpoints object.  The value for each key indicates whether
 * or not the browser width is greater than the breakpoint.
 */
function getGreaterThan(browser_width) {
    return transform(breakpoints, (result, breakpoint, media_type) => {
        // if the breakpoint is a number
        if (typeof breakpoint === 'number') {
            // store wether or not it is greater than the breakpoint
            result[media_type] = browser_width > breakpoint
        } else {
            result[media_type] = false
        }
    })
}


/**
 * Gets the current media type from the global `window`.
 * @returns {string} The window's current media type.  This is the key of the
 * breakpoint that is the next breakpoint larger than the window.
 */
function getCurrentMediaType() {
    // loop over the keys of the media query
    const current_media = keys(media_queries).reduce((previous_type, current_type) => {
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
        return previous_type
    })

    // return the current media type
    return current_media
}


/**
 * Determine and return the responsive state based on the window's width.
 * Uses default breakpoint if no window available.
 * @returns {object} The responsive state.
 */
function computeResponsiveState() {
    // current width of the browser window
    let browser_width
    // if there is a window to use
    if (typeof window !== 'undefined') {
        browser_width = window.innerWidth
    // otherwise there is no global `window` (we are on the server)
    } else {
        // so return the default breakpoint width
        browser_width = breakpoints[default_breakpoint]
    }

    // compute and return the new responsive state
    const computed = {
        width: browser_width,
        media_type: getCurrentMediaType(browser_width),
        less_than: getLessThan(browser_width),
        greater_than: getGreaterThan(browser_width),
    }
    return computed
}


/**
 * Reducer for handling the responsive state.
 */
export default function(state = computeResponsiveState(), action) {
    // if we were told to recalculate the state
    if (action.type === CALCULATE_RESPONSIVE_STATE) {
        // do so
        return computeResponsiveState()
    }
    // otherwise return the default state
    return state
}
