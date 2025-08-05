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

let num1 = 0;
let num2 = 0;
let operator = '';

const operate = (n1, n2) => {
  switch (operator) {
    case '+':
      return add(n1, n2);
    case '-':
      return substract(n1, n2);
    case '*':
      return multiply(n1, n2);
    case '/':
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
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayContent.length == 10) return;
    if (button.textContent == '.' && displayContent.includes('.')) return;
    displayContent.push(button.textContent);
    display.textContent = displayContent.join('');
  });
});

// Clear display
const clearButton = document.querySelector('.clear-btn');

clearButton.addEventListener("click", () => {
  displayContent = [];
  display.textContent = '';
});

// Delete last number
const backspaceButton = document.querySelector('.backspace-btn');

backspaceButton.addEventListener("click", () => {
  displayContent.pop();
  display.textContent = displayContent.join('');
});