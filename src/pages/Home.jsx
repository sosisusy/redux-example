import React, { Component } from 'react'
import Counter from '../components/Counter'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="main__wrapper">
                <Counter />
            </div>
        )
    }
}
export default Home