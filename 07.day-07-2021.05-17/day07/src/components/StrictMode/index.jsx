import React from "react";
class Index extends React.Component {
  constructor() {
    super()
    console.log("construcor被调用了");
  }
  handleCLick = () => {
    console.log(this.refs.pRef)
    console.log(123);
  }
  render() {
    return (
      <div>
        <p ref={'pRef'}>我是p标签</p>
        <button onClick={this.handleCLick}>按钮</button>
      </div>
    )
  }
}
export default Index
