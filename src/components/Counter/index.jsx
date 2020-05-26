import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from '../../reducers'
import CounterContainer from './CounterContainer'

class Counter extends Component {

    render() {
        const store = createStore(counterApp)

        return (
            <Provider store={store}>
                <CounterContainer />
            </Provider>
        )
    }
}

export default Counter