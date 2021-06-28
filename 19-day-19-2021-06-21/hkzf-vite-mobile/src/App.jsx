import React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { Button } from "antd-mobile"
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
function App(props) {
  console.log(props);
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="/citylist">CityList</NavLink>
      {renderRoutes(props.route.routes)}
      <Button>按钮</Button>
      <Button type="primary">确认按钮</Button>
    </div>
  )
}

export default App;