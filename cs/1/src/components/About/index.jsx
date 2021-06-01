import React from "react";
import {HashRouter, NavLink} from "react-router-dom"
import {renderRoutes} from "react-router-config";
class About extends React.Component {
  state = {
  
  }
  render() {
    return (
      <div>
        <h2>我是About组件</h2>
        <HashRouter>
          <NavLink to="/about/recomment">推荐</NavLink>
          <br />
          <NavLink to="/about/aboutus">关于我们</NavLink>
          {renderRoutes(this.props.route.routes)}
        </HashRouter>
      </div>
    )
  }
}
export default About;