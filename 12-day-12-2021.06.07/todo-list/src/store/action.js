import { ADD_DATA, DEL_DATA, EXIT_CATE, EXIT_DATA } from "./constants"
export const addData = (task) => {
  return {
    type: ADD_DATA,
    task: task
  }
}

export const delData = (id) => {
  return {
    type: DEL_DATA,
    id: id
  }
}

export const exitData = (id) => {
  return {
    type: EXIT_DATA,
    id: id
  }
}
export const exitCate = (viewKey) => {
  return {
    type: EXIT_CATE,
    viewKey: viewKey
  }
} 