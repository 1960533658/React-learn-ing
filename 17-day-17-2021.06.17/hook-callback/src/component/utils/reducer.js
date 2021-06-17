const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case "ADD":
      return { num: state.num + 1 }
    case "SUB":
      return { num: state.num - 1 }
    default:
      return state
  }
}

export default reducer;