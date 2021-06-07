import { ADD_DATA, DEL_DATA, EXIT_CATE, EXIT_DATA } from "./constants";

// 分析：1. 初始化数据
const initialState = {
  list: [
    { id: 1, info: "周六去学习", status: false },
    { id: 2, info: "周日去看电影", status: true },
  ],
  viewKey: "all"
}

// 分析：2.在reducer中创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 添加- 5. 把数据添加到state中
    case ADD_DATA:
      return {
        ...state,
        list: [...state.list,action.task]
      }
    case DEL_DATA:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    case EXIT_DATA:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.id) {
            return {...item, status: !item.status}
          } else {
            return item
          }
        })
      }
    case EXIT_CATE:
      console.log(action.viewKey);
      return {
        ...state, viewKey: action.viewKey
      }
    default:
      return state;
  }
}
export default reducer;