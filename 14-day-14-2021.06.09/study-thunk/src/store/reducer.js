const initialState = {
  num: 123
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUM_ACTION":
      return {num: action.num}
    default:
      return state
  }
}
export default reducer;