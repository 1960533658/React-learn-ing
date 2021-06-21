import { useEffect, useLayoutEffect} from "react";
function Home() {
  useEffect(() => {
    console.log("组件初始换/更新");
    return () => {
      console.log("组件即将卸载");
    }
  })
  useLayoutEffect(() => {
    console.log("组件初始换/更新--layout");
    return () => {
      console.log("组件即将卸载--layout");
    }
  })
  return (
    <div>
      <h2>Home组件</h2>
    </div>
    
  )
}
export default Home;

