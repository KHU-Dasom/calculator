export const calc = (first, second, oper) => {
  let result;
  switch (oper) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "x":
      result = first * second;
      break;
    case "÷":
      result = first / second;
      break;
    case "=":
      result = second;
      break;
    default:
      console.log("Error!");
  }
  return result;
};
