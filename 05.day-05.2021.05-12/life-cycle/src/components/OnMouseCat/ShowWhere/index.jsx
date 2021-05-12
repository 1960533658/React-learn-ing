import React from "react";
import Mouse from "../Mouse";
class ShowWhere extends React.Component {
  render() {
    return (
      <div>
        <Mouse>
          {(mouse) => {
            return (
              <div>{mouse.x}---{mouse.y}</div>
            )
          }}
        </Mouse>
      </div>
    )
  }
}

export default ShowWhere