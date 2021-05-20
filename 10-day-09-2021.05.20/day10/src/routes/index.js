import About from "../components/route-manage/About"
import Home from "../components/route-manage/Home"
import Login from "../components/route-manage/Login"
import AboutMy from "../components/route-manage/AboutMy"
import Abouther from "../components/route-manage/Abouther"
const routes = [
  { path: "/home", component: Home },
  { path: "/login", component: Login},
  {
    path: "/about", component: About, routes: [
      { path: "/about/my", component: AboutMy },
      { path: "/about/her", component: Abouther }
  ]}
]
export default routes