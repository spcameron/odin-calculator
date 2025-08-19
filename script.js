const firstOperand = "";
const secondOperand = "";
const currentOperator = null;

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const upperDisplay = document.getElementById("upper-display");
const lowerDisplay = document.getElementById("lower-display");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => handleNumber(button.value)),
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => handleOperator(button.value)),
);

function clearLowerDisplay() {
  lowerDisplay.textContent = "";
}

function clearUpperDisplay() {
  upperDisplay.textContent = "";
}

function handleNumber(number) {
  if (lowerDisplay.currentText === "0") clearLowerDisplay();

  updateLowerDisplay(firstOperand, secondOperand, currentOperator);
}

function handleOperator() {}

function updateLowerDisplay(firstNumber, secondNumber, operator) {
  let displayText = `${firstNumber}`;

  if (operator !== null) displayText += ` ${operator}`;

  if (secondNumber !== "") displayText += ` ${secondNumber}`;

  lowerDisplay.currentText = displayText;
}

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
  x = +x;
  y = +y;

  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return sub(x, y);
    case "*":
      return mul(x, y);
    case "/":
      if (y === 0) return null;
      return div(x, y);
    default:
      console.error(`ERROR: Unrecognized operator: ${operator}`);
      return null;
  }
}
