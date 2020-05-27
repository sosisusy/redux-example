import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import Root from "./Root"

// const Routes = () => (
//     <Router>
//         <NavLink to="/">hm</NavLink>
//         <Route exact path="/" component={Root} />
//     </Router>
// )


ReactDOM.render(<Root />, document.querySelector("#app"))