import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/counter'

class Buttons extends Component {

    increment() {
        this.props.onIncrement()
    }
    decrement() {
        this.props.onDecrement()
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
    }
}

Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons)


export default Buttons