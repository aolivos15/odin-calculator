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