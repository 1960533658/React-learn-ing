// 导入指定方法中对应返回值的js文件
import { ADD_COUNT, SUB_COUNT } from "./constants"
// 创建初始化数据
const inittialState = {
  count: 0,
  list: [1, 2, 3, 4]
}

// 更具不同方法传递过来的值进行不同的操作计算
const reducer = (state = inittialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 }
    case SUB_COUNT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}
export default reducer;