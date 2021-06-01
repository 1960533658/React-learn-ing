import React from "react";
import {CSSTransition} from "react-transition-group"
class Login extends React.Component {
  state = {
    isShow: false
  }
  handlleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    }, () => {
      console.log(this.state.isShow);
    })
  }
  render() {
    return (
      <div>
        <h2>我是Login组件</h2>
        <button onClick={this.handlleClick}>按钮</button>
        <CSSTransition classNames="move" timeout={1000} in={this.state.isShow}>
          <div className="move"></div>
        </CSSTransition>
      </div>
    )
  }
}
export default Login