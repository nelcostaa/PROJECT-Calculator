const container = document.querySelector('.container');
const display = document.querySelector('.display');
const symButtons = document.querySelectorAll('#btn');
const numButtons = document.querySelectorAll('#btn-num');
const equalButton = document.querySelector('#btn-equal');
const clearButton = document.querySelectorAll('#btn-clear');

let displayText = '';
let sum = [];
let operatorArray = [];
let storeValue = [];

symButtons.forEach((button) => {
  button.addEventListener('click', callButton);
});

numButtons.forEach((num) => {
  num.addEventListener('click', getInput);
});

clearButton.forEach((clearAll) => {
  clearAll.addEventListener('click', startFresh);
});

equalButton.addEventListener('click', equal);

const add = function (a, b) {
  calc = a + b;
  storeValue = storeValue.concat(calc);
  console.log(storeValue);
  display.textContent = calc;
  clear();
};

const subtract = function (a, b) {
  calc = a - b;
  storeValue = storeValue.concat(calc);
  console.log(storeValue);
  display.textContent = calc;
  clear();
};

const multiply = function (a, b) {
  calc = a * b;
  storeValue = storeValue.concat(calc);
  console.log(storeValue);
  display.textContent = calc;
  clear();
};

const divide = function (a, b) {
  if (a === 0 || b === 0) {
    alert('ERROR: SNARKY DETECTED!!');
    startFresh();
  }
  calc = a / b;
  storeValue = storeValue.concat(calc);
  console.log(storeValue);
  display.textContent = calc;
  clear();
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
  operatorArray = operatorArray.concat(this.textContent);
  sum = sum.concat(displayText);
  console.log(operatorArray);
  console.log(sum);
  clear();

  if (sum.length === 2) {
    num1 = parseInt(sum.splice(0, 1));
    console.log(num1);
    num2 = parseInt(sum.splice(0, 1));
    console.log(num2);
    operator = String(operatorArray.splice(0, 1));
    console.log(operator);
    operate(operator, num1, num2);
    clear();
  } else if (storeValue.length === 1) {
    num2 = parseInt(sum.splice(0, 1));
    num1 = storeValue.splice(0, 1);
    operator = String(operatorArray.splice(0, 1));
    operate(operator, num1, num2);
    clear();
  }
}

function getInput() {
  displayText += this.textContent;
  display.textContent = displayText;
}

function sumAll() {
  operate(operator, num1, num2);
}

function clear() {
  displayText = '';
}

function equal() {
  if (displayText === '' || sum.length === 0) {
    return;
  }
  sum = sum.concat(displayText);
  num1 = 0;
  num2 = 0;
  operator = '';

  if (sum.length === 2) {
    num1 = parseInt(sum.splice(0, 1));
    console.log(num1);
    num2 = parseInt(sum.splice(0, 1));
    console.log(num2);
    operator = String(operatorArray.splice(0, 1));
    console.log(operator);
    operate(operator, num1, num2);
    clear();
  } else if (storeValue.length === 1) {
    num2 = parseInt(sum.splice(0, 1));
    num1 = storeValue.splice(0, 1);
    operator = String(operatorArray.splice(0, 1));
    operate(operator, num1, num2);
    clear();
  }
}

function startFresh() {
  return (
    (display.textContent = ''),
    (sum = []),
    (operatorArray = []),
    (storeValue = []),
    (displayText = '')
  );
}
