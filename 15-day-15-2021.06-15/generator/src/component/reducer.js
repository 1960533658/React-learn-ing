const initalState = {
  num: 1
}

const reducer = (state = initalState, action) => {
  console.log(action)
  switch (action.type) {
    case "SAVE_NUM":
      console.log(111);
      return {
        ...state, num: action.num
      }
    case "GET_NUM":
      return {
        ...state, num: 222
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;