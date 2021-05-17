import React from "react";
// 引入CssModule.css
import firstCssModule from "./CssModule.module.css"
class CssModule extends React.Component {
  render() {
    return (
      <div>
        <p className={firstCssModule.color1}>我是第一行</p>
        <p className="color2">我是第二行</p>
      </div>
    )
  }
}
export default CssModule