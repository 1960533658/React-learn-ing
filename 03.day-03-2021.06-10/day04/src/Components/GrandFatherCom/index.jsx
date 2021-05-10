import React from "react";
import FatherCom from "../FatherCom"
import { Provider } from "../../utils/context"
class GrandeFatherContext extends React.Component {
  state = {
    msg: "context数据传输完成"
  }
  render() {
    return (
      <Provider value={this.state.msg}>
        <FatherCom></FatherCom>
      </Provider>
    )
  }
}
export default GrandeFatherContext;