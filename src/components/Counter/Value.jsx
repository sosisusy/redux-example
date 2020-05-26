import React, { Component } from 'react'
import { connect } from 'react-redux'

class Value extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

Value = connect(mapStateToProps)(Value)
export default Value