import React from "react";

import ShowCat from "../ShowCat";
import ShowWhere from "../ShowWhere";

class ShowCatAndWhere extends React.Component {
  render() {
    return (
      <div>
        <ShowWhere></ShowWhere>
        <ShowCat></ShowCat>
      </div>
    )
  }
}

export default ShowCatAndWhere;