import Home from "../components/Home";
import Login from "../components/Login";
import About from "../components/About";
import Recomment from "../components/About/Recomment"
import AboutUs from "../components/About/AboutUs"
import { Redirect } from "react-router";
const routes = [
  {path: "/", exact: true, component: () => <Redirect to="/home" />},
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  {
    path: "/about", component: About, routes: [
      { path: "/about", exact: true, component: () => <Redirect to="/about/recomment" />},
      { path: "/about/recomment", component: Recomment },
      { path: "/about/aboutus", component: AboutUs },
  ]},
]
export default routes