import React from "react";
import styled from "styled-components";
const DivStyle = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
`
const Button = styled.button`
  width: ${props => {
  console.log(props);
  // 如哦props所在的组件存在primary属性就让修改width
  if (props.primary) {
    return "100px";
  } else {
    return props.width
  }
  }};
  height: 30px;
  background-color: gold;
  color: skyblue;
  border: none;
`
// 基础样式按钮
const Button1 = styled.button`
  width: 100px;
  height: 30px;
  background-color: goldenrod;
  color: skyblue;
  border: none;
`
// 扩展样式按钮
const Button2 = styled(Button)`
  border: 10px solid gold;
`
class StyledComponents extends React.Component {
  state = {
    width: "70px",
    height: "30px"
  }
  
  render() {
    return (
      <div>
        <DivStyle></DivStyle>
        <Button primary {...this.state}>主要按钮</Button>
        <Button>按钮</Button>
        <br />
        <Button1>按钮</Button1>
        <Button2>继承按钮</Button2>
      </div>
    )
  }
}
export default StyledComponents