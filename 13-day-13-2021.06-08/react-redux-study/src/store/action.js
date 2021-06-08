// 导入不同方法中所对应的返回值的js文件
import { ADD_COUNT, SUB_COUNT } from "./constants";
// 当触发增加方法时返回相应的字符
export const addAction = () => {
  return {
    type: ADD_COUNT
  }
}

// 当-1方法时返回相应的字符
export const subAction = () => {
  return {
    type: SUB_COUNT
  }
}