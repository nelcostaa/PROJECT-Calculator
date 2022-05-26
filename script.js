const container = document.querySelector('.container');
const display = document.querySelector('.display');
const symButtons = document.querySelectorAll('#btn');
const numButtons = document.querySelectorAll('#btn-num');
const equalButton = document.querySelector('btn-equal');

symButtons.forEach((button) => {
  button.addEventListener('click', callButton);
});

numButtons.forEach((num) => {
  num.addEventListener('click', getInput);
});

let displayText = '';
let sum = [];

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '%':
      return divide(num1, num2);
    case 'x':
      return multiply(num1, num2);
  }
}

function callButton() {
  operator = this.textContent;
  sum = sum.concat(displayText);
  console.log(sum);
  clear();
}

function getInput() {
  displayText += this.textContent;
  console.log(displayText);
  return displayText;
}

function sumAll() {
  operate(operator, num1, num2);
}

function clear() {
  displayText = '';
}
