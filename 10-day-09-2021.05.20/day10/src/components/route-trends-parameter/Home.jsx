import React from "react";
class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search);
    const a = new URLSearchParams(this.props.location.search)
    console.log(a.get("name"))
    console.log(a.get("age"))
    console.log(a.getAll("age"))// 获取的是数组形式
    console.log(a.getAll("name"));
  }
  render() {
    return (
      <div>
        Home组件
      </div>
    )
  }
}
export default Home