// third party imports
import {connect} from 'react-redux'
import pick from 'lodash/object/pick'


/**
 * Picks only the given keys off the redux state.
 * @example
 * @quickConnect('posts', 'tags')
 * class MyComponent extends React.Component {
 *     render() {
 *         const {posts, tags} = this.props
 *         // ...
 *     }
 * }
 */
export default (...keys) => connect(state => pick(state, keys))
