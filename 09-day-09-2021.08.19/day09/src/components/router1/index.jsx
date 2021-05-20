import React from "react";

import Home from "./Home"
import About from "./about"
class Index extends React.Component {
  state = {
    flag: true
  }
  buttonClick = (f) => {
    this.setState({
      flag: f
    })
  }
  render() {
    return (
      <div >
        <button onClick={() => {this.buttonClick(true)}}>Home</button>
        <button onClick={() => { this.buttonClick(false) }}>about</button>
        {this.state.flag? <Home /> : <About />}
      </div>
    )
  }
}
export default Index