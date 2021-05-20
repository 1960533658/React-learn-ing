import React from "react";
import { NavLink, Switch, Route} from 'react-router-dom';
const Recod = () => {
  return (
    <div>我是推荐</div>
  )
}
const TopList = () => {
  return (
    <div>我是排行榜</div>
  )
}
class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home组件</div>
        <NavLink exact to="/home/recod">推荐</NavLink>
        <NavLink exact to="/home/toplist">排行榜</NavLink>
        <Switch>
          <Route exact path="/home/recod" component={Recod} />
          <Route exact path="/home/toplist" component={TopList} />
        </Switch>
      </div>
    )
  }
}
export default Home