import { ADD_COUNT, SUB_COUNT } from "./contants";

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {...state, count: state.count + 1}
    case SUB_COUNT:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}
export default reducer;