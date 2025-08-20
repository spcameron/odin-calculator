let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldReset = false;

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const equalsButton = document.getElementById("equals");
const changeSignButton = document.getElementById("change-sign");
const clearButton = document.getElementById("all-clear");
const decimalButton = document.getElementById("decimal");
const upperDisplay = document.getElementById("upper-display");
const lowerDisplay = document.getElementById("lower-display");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => handleNumber(button.value)),
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => handleOperator(button.value)),
);

decimalButton.addEventListener("click", () => {
  handleDecimal();
});

equalsButton.addEventListener("click", () => {
  if (secondOperand === "") {
    return;
  }

  const result = operate();
  shouldReset = true;
  upperDisplay.textContent = lowerDisplay.textContent;
  clearValues();

  if (result !== undefined) {
    firstOperand = String(result);
    updateLowerDisplay();
  } else {
    firstOperand = "0";
    lowerDisplay.textContent = "ERR: DIV BY ZERO";
  }
});

changeSignButton.addEventListener("click", () => {
  if (currentOperator === null) {
    if (firstOperand === "" || firstOperand === "0") return;
    firstOperand = String(-Number(firstOperand));
  } else {
    if (secondOperand === "" || secondOperand === "0") return;
    secondOperand = String(-Number(secondOperand));
  }
  updateLowerDisplay();
});

clearButton.addEventListener("click", () => {
  clearValues();
  clearUpperDisplay();
  clearLowerDisplay();
  shouldReset = false;
  lowerDisplay.textContent = "0";
});

function clearLowerDisplay() {
  lowerDisplay.textContent = "";
}

function clearUpperDisplay() {
  upperDisplay.textContent = "";
}

function clearValues() {
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
}

function handleNumber(number) {
  if (lowerDisplay.textContent === "0" || shouldReset) {
    clearValues();
    clearLowerDisplay();
    shouldReset = false;
  }

  if (currentOperator === null) {
    firstOperand = firstOperand + number;
  } else {
    secondOperand = secondOperand + number;
  }

  updateLowerDisplay();
}

function handleOperator(operator) {
  if (lowerDisplay.textContent === "0") firstOperand = "0";

  if (secondOperand === "") {
    currentOperator = operator;
    shouldReset = false;
  } else {
    const result = operate();

    if (result === undefined) {
      firstOperand = "0";
      lowerDisplay.textContent = "ERR: DIV BY ZERO";
      shouldReset = true;
      return;
    }

    upperDisplay.textContent = lowerDisplay.textContent;
    clearValues();
    firstOperand = String(result);
    currentOperator = operator;
  }

  updateLowerDisplay();
}

function handleDecimal() {
  if (shouldReset) {
    clearValues();
    clearLowerDisplay();
    shouldReset = false;
    lowerDisplay.textContent = "0";
  }

  if (currentOperator === null) {
    if (hasDecimal(firstOperand)) return;
    firstOperand = (firstOperand || "0") + ".";
  } else {
    if (hasDecimal(secondOperand)) return;
    secondOperand = (secondOperand || "0") + ".";
  }

  updateLowerDisplay();
}

function updateLowerDisplay() {
  let displayText = `${firstOperand}`;

  if (currentOperator !== null) displayText += ` ${currentOperator} `;

  if (secondOperand !== "") displayText += `${secondOperand}`;

  lowerDisplay.textContent = displayText;
}

function hasDecimal(number) {
  return String(number).indexOf(".") >= 0;
}

function getOperator() {
  switch (currentOperator) {
    case "+":
      return "+";
    case "−":
      return "-";
    case "×":
      return "*";
    case "÷":
      return "/";
    case "%":
      return "%";
    default:
      console.error(`ERROR: Unrecognized operator: ${currentOperator}`);
      return;
  }
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

function mod(x, y) {
  return x % y;
}

function operate() {
  const x = +firstOperand;
  const y = +secondOperand;

  switch (getOperator()) {
    case "+":
      return add(x, y);
    case "-":
      return sub(x, y);
    case "*":
      return mul(x, y);
    case "/":
      if (y === 0) {
        clearValues();
        return;
      }
      return div(x, y);
    case "%":
      if (y === 0) {
        clearValues();
        return;
      }
      return mod(x, y);
    default:
      console.error(`ERROR: Unrecognized operator: ${currentOperator}`);
      return;
  }
}
