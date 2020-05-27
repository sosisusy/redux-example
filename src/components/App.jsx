import React, { Component } from 'react'
import CounterContainer from '../containers/CounterContainer'
import AppTemplate from './AppTemplate'
import TodoContainer from '../containers/TodoContainer'

class App extends Component {
    render() {
        return (
            <AppTemplate
                counter={<CounterContainer />}
                todos={<TodoContainer />}
            />
        )
    }
}

export default App