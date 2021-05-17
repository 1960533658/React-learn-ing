import React from "react";
class VirtualDOM extends React.Component {
  state = {

  }
  render() {
    const DIVDOM =
      <div>
        <p>我是p标签</p>
        <button>按钮</button>
      </div>
    console.log(DIVDOM)
    return (DIVDOM)
  }
}
export default VirtualDOM