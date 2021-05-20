import React from "react";
class About extends React.Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        About组件
      </div>
    )
  }
}
export default About