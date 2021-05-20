import React from "react";
import { Redirect } from "react-router-dom";
class User extends React.Component {
  state = {
    isLogin: false
  }
  render() {
    let user = <div>User页面</div>
    return this.state.isLogin ? user : <Redirect to="/login" />
  }
}
export default User