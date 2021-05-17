import React from "react";

// const Home = (props) => {
//   console.log("组件更新");
//   return (
//     <div>
//       <h3>我是home组件{props.count}</h3>
//     </div>
//   )
// }

const Home = React.memo((props) => {
  console.log("home组件更新");
  return (
    <div>
      <h3>我是Home组件</h3>
      <p>我是Home中的count{props.count}</p>
    </div>
  )
})

export default Home;