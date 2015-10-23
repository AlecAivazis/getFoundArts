// third party imports
import createBrowserHistory from 'history/lib/createBrowserHistory'

// use the browser's native history
const history = typeof window !== 'undefined' ? createBrowserHistory() : null

export default history
