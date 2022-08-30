"use strict";

let firstNumber, secondNumber, action, answer;

function checkNumber(msg) {
  let result;
  do {
    result = prompt(msg);
  } while (result === null || result === "" || Number.isNaN(+result));
  return result;
}
firstNumber = +checkNumber("Введите первое число");

secondNumber = +checkNumber("Введите второе число");

function checkAction(msg) {
  action = prompt(msg);
  switch (action) {
    case "-":
      return firstNumber - secondNumber;

    case "+":
      return firstNumber + secondNumber;

    case "*":
      return firstNumber * secondNumber;

    case "/":
      return firstNumber / secondNumber;

    default:
      return checkAction(msg);
  }
}

answer = checkAction("Выберете действие");

alert(`${firstNumber} ${action} ${secondNumber} = ${answer}`);
