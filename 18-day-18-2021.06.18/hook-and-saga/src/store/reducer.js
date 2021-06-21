const initalState = {
  num: "kangkang"
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "SAVE_NUM":
      return {
        ...state, num: action.num
      }
    default:
      return {
        ...state
      }
  }
}
export default reducer;