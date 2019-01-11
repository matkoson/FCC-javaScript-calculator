function makeCalculation(arr) {
  console.log(arr);
  let result = 0,
    operation;
  if (
    arr[arr.length - 1] === "-" ||
    arr[arr.length - 1] === "+" ||
    arr[arr.length - 1] === "x" ||
    arr[arr.length - 1] === "÷"
  )
    arr.pop();
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      result = Number(arr[i]);
    }
    if (arr[i] === "+") {
      operation = "add";
      continue;
    } else if (arr[i] === "-") {
      operation = "sub";
      continue;
    } else if (arr[i] === "x") {
      operation = "multi";
      continue;
    } else if (arr[i] === "÷") {
      operation = "div";
      continue;
    }
    if (operation === "add") {
      result += Number(arr[i]);
    } else if (operation === "sub") {
      result -= Number(arr[i]);
    } else if (operation === "multi") {
      result *= Number(arr[i]);
    } else if (operation === "div") {
      result /= Number(arr[i]);
    }
  }
  return result;
}
export default makeCalculation;
