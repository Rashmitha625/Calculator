let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

const display = document.getElementById('display');

function inputDigit(digit) {
    if (secondOperand === true) {
      displayValue = digit;
      secondOperand = false;
    } else {
      displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
}

function inputDecimal() {
    if (secondOperand) {
      displayValue = '0.';
      secondOperand = false;
    } else if (!displayValue.includes('.')) {
      displayValue += '.';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}

function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && secondOperand) {
      operator = nextOperator;
      return;
    }

    if (firstOperand == null) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = operate(firstOperand, inputValue, operator);

      displayValue = `${parseFloat(result.toFixed(7))}`;
      firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function operate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }

    return secondOperand;
}