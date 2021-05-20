import React from "react";
class Login extends React.Component {
  handle = () => {
   this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        <div>Login组件</div>
        <button onClick={this.handle}>hash跳转到Home</button>
      </div>
    )
  }
}
export default Login