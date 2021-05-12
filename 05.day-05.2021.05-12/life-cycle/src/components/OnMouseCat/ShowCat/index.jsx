import React from "react";
import Mouse from "../Mouse";
import Img from "../../../image/cat.png";
class ShowCat extends React.Component {
  render() {
    return (
      <div>展示小猫
        <Mouse >
          {mouse => {
            return (
              <img src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x }} alt="" />
            )
          }}
        </Mouse>
      </div>
    )
  }
}

export default ShowCat;