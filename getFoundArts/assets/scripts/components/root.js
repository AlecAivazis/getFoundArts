'use strict'

// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'


class RootElement extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {
            number: 0
        }
        this.increment_number = this.increment_number.bind(this)
    }


    increment_number() {
        this.setState({
            number: this.state.number + 1
        })
    }


    // called when the component is first mounted
    componentDidMount() {}


    // called before the component is removed
    componentWillUnmount() {}


    // render the component
    render() {
        return (
            <div onClick={this.increment_number}>
                hello {this.state.number}
            </div>
        )
    }
}


RootElement.defaultProps = {}


RootElement.propTypes = {}


let styles = StyleSheet.create({})


export default RootElement


// end of file
