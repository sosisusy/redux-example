import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from "@pages/Home"


const Routes = () => (
    <Router>
        <NavLink to="/">hm</NavLink>
        <Route exact path="/" component={Home} />
    </Router>
)


ReactDOM.render(<Routes />, document.querySelector("#app"))