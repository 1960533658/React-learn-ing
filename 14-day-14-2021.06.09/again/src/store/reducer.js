const initialState = {
  num: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUM_CHANGE":
      return {
        ...state, num: action.num
      }
    case "NUM_GET":
      return {
        ...state, num: action.num
      }
    default:
      return state
  }
}
export default reducer;