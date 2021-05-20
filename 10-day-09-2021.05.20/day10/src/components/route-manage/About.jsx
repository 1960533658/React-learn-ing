import React from "react";
import {NavLink} from "react-router-dom";
import {renderRoutes} from 'react-router-config';
class About extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h3>About组件</h3>
        <NavLink to="/about/my">关于我</NavLink>
        <NavLink to="/about/her">关于她</NavLink>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
export default About