export const getNum = () => {
  // 拦截住GET_NUM之后，发起了一个请求，并把数据返回了
  // redux-thunk的时候 写了几个action一个是发送球求的，一个是改变数据的
  return {
    type: "GET_NUM",
  }
}
export const SavaGetNum = (num) => {
  console.log(num);
  return {
    type: "SAVE_NUM",
    num: num
  }
}