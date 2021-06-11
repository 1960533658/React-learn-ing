export const numGet = async () => {
  const resonse = await fetch("http://localhost:8080/getdata");
  const result = await resonse.json();
  return {
    type: "NUM_ACTION",
    num: result.num
  }
}