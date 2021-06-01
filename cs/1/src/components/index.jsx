import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from "../routes"
class Index extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="box">
        <HashRouter>
          <div className="left">
            <NavLink to="/home">Home</NavLink>
            <br />
            <NavLink to="/about">About</NavLink>
            <br />
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className="right">
            {renderRoutes(routes)}
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index