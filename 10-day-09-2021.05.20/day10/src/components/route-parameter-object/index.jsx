import React from "react";
import { HashRouter,NavLink, Route} from "react-router-dom";

import Home from "./Home.jsx"
import About from "./About.jsx"
import Login from "./Login.jsx"
class Index extends React.Component {
  state = {
    // name: "李四",
    // age: 22
  }
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to={{
            pathname: "/login",
            state: {
              name: 'zs',
              age: 18,
              hobby: ['football', 'pingpang']
            }
          }}>login</NavLink>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default Index  