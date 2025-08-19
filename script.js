function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return sub(x, y);
    case "*":
      return mul(x, y);
    case "/":
      return div(x, y);
    default:
      console.error(`ERROR: Unrecognized operator: ${operator}`);
      return;
  }
}

let firstOperand;
let secondOperand;
let operator;
