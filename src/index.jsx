import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from "@pages/Home"
import Home2 from "@pages/test"


const Routes = () => (
    <div>
        <NavLink to="/">hm</NavLink>
        <NavLink to="/mm">mm</NavLink>
        <Route exact path="/" component={Home} />
        <Route path="/mm" component={Home2} />
    </div>
)


ReactDOM.render(<Router><Routes /></Router>, document.querySelector("#app"))