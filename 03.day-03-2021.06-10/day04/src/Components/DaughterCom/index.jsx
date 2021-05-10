import React from "react"
// 限制传入的数据类型
import propTypes from "prop-types"

const DaughterCom = (props) => {
    DaughterCom.prototype = {
      daugther: propTypes.string
    }
    return (
      <div className="daugther">
        <h3>女儿组件{props.daugther}</h3>
      </div>
    )
}

export default DaughterCom;