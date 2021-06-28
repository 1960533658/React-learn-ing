// 配置路由

import Home from "../pages/Home";
import App from "../App";
import FindHouse from "../pages/FindHoust";
import News from "../pages/News";
import My from "../pages/My";
import {Redirect} from "react-router-dom"
const routes = [
  {
    path: "/", component: App, children: [
      { path: "/", exact: true, render: () => (<Redirect to={"/home"}/>)},
      { path: "/home", exact: true, component: Home },
      { path: "/findHouse", exact: true, component: FindHouse },
      { path: "/news", exact: true, component: News },
      { path: "/my", exact: true, component: My },
  ]},
  
]

export default routes;