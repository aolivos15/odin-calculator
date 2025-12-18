////////////////////////////////////////
// OPERATOR FUNCTIONS

const add = (n1, n2) => {
  return n1 + n2;
}

const substract = (n1, n2) => {
  return n1 - n2;
}

const multiply = (n1, n2) => {
  return n1 * n2;
}

const divide = (n1, n2) => {
  return n1 / n2;
}

let num1 = '';
let num2 = '';
let operator = '';

const operate = (n1, n2) => {
  switch (operator) {
    case '+':
      return add(n1, n2);
    case '−':
      return substract(n1, n2);
    case 'x':
      return multiply(n1, n2);
    case '÷':
      return divide(n1, n2);
    default:
      console.log(`Unknown operator`);
      break;
  }
}

/////////////////////////////////////////
// DISPLAYING NUMBERS ON THE SCREEN

// Display numbers
let displayContent = [];
let operatorPressed = false;
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number-btn');
const maxDisplayWidth = 10;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If this is the start of the second number of an operation
    if (operatorPressed) {
      displayContent = [];
      display.textContent = '';
      operatorPressed = false;
    }
    if (button.textContent == '.' && displayContent.includes('.')) return;
    // Display new numbers only if they fit on the display
    if (displayContent.length < maxDisplayWidth) {
      displayContent.push(button.textContent);
      display.textContent = displayContent.join('');
    }
  });
});

// Clear display
const clearButton = document.querySelector('.clear-btn');

clearButton.addEventListener("click", () => {
  displayContent = [];
  display.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
  operatorPressed = false;
});

// Delete last number
const backspaceButton = document.querySelector('.backspace-btn');

backspaceButton.addEventListener("click", () => {
  displayContent.pop();
  display.textContent = displayContent.join('');
});


//////////////////////////////////////////
// CALCULATOR FUNCTIONALITY

const operatorButtons = document.querySelectorAll('.operator-btn');

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If this is the first operation
    if (operator == '') {
      operator = button.textContent;
      num1 = +display.textContent;
      operatorPressed = true;
    } else if (operator != '' && !operatorPressed) {
      // If user has entered a 2nd operator
      num2 = +display.textContent;
      operatorPressed = true;
      const result = operate(num1, num2);
      num1 = result; // save result for next operation
      // Show result of previous operation on display, converting it to scientific notation if too long
      if (result.toString().length > maxDisplayWidth) {
        display.textContent = result.toExponential(maxDisplayWidth - 5);
      } else {
        display.textContent = result;
      }
      // Clear variable to receive 2nd number for the new operation
      displayContent = [];
      operator = button.textContent;
    }
  });
});

const equalButton = document.querySelector('.equal-btn');

equalButton.addEventListener("click", () => {
  if (num1 == '') return;
  num2 = +display.textContent;
  operatorPressed = true;
  const result = operate(num1, num2);
  // Show result of operation on display, converting it to scientific notation if too long
  if (result.toString().length > maxDisplayWidth) {
    display.textContent = result.toExponential(maxDisplayWidth - 5);
  } else {
    display.textContent = result;
  }
  // Clear all variables
  displayContent = [];
  num1 = '';
  num2 = '';
  operator = '';
  operatorPressed = false;
})