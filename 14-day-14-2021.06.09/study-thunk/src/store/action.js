export const numGet =  (dispatch) => {
  fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    .then(json => dispatch(numAction(json.num)))
  
}

export const numAction = (num) => {
  return {
    type: "NUM_ACTION",
    num: num
  }
}