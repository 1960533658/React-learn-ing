export const numGet = (num) => {
  return {
    type: "NUM_GET",
    num: num
  }
}

export const GetNum = (dispatch) => {
  fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    .then(json => dispatch(numGet(json.num)))
  
}

// export const numChange = async () => {
//   const response =await fetch("http://localhost:8080/getdata")
    
//   const result = await response.json();
//   return {
//     type: "NUM_CHANGE",
//     num: result.num
//   }
// }
// export const numChange = (dispatch) => {
//   fetch("http://localhost:8080/getdata")
//     .then(response => response.json())
//     .then(json => dispatch(numGet(json.num)))
// }