import { useImperativeHandle, useRef } from "react";
/**
 * useInperativeHandle 可以让你在使用ref时自定义暴露给父组件的实例值
 * 在大多是情况下，应当避免使用ref这样的命令式代码
 * useImperativeHandle应当与forwarRef一起使用
 */
function Home(props, ref) {
  const inputRef = useRef();
  // 第一个参数父元素传进来的Ref
  // 第二个参数：回调函数，作用是：暴露哪些元素给父组件
  useImperativeHandle(ref, () => {
    return {
      myFocus: function () {
        inputRef.current.focus()
      },
      setVal: function (val) {
        inputRef.current.value = val
      }
    }
  })
  return (
    <div>
      <input type="text" placeholder="请输入" ref={inputRef}/>
    </div>
    
  )
}
export default Home;

