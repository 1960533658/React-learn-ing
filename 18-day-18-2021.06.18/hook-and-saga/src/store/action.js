export const getNum = () => {
  return {
    type: "GET_NUM"
  }
}

export const SaveGetNum = (num) => {
  return {
    type: "SAVE_NUM",
    num: num
  }
}