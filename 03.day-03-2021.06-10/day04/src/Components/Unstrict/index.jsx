import React from "react"
class Unstrict extends React.Component {
  constructor() {
    super();
    this.text = React.createRef();
  }
  gettext = () => {
    console.log(this.text.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.text} />
        <button onClick={this.gettext}>点击获取当前文本的值（非受控组件）</button>
      </div>
    )
  }
}
export default Unstrict;