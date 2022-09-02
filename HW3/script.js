"use strict";
function checkNumber(msg) {
  let result;
  do {
    result = prompt(msg);
  } while (
    result === null ||
    result.trim() === "" ||
    Number.isNaN(+result) ||
    result < 0
  );
  return result;
}

function isOdd(Num) {
  let Odd = 0;
  for (let i = 0; i <= Num; i++) {
    if (i % 2 == 0) {
      Odd += i;
    }
  }
  return Odd;
}
function isEven(Num) {
  let Even = 0;
  for (let i = 0; i <= Num; i++) {
    if (i % 2 !== 0) {
      Even += i;
    }
  }
  return Even;
}

const operant = +checkNumber("Введите число");
alert(`Ссумма нечётных чисел ${isEven(operant)}`);
alert(`Ссумма чётных чисел ${isOdd(operant)}`);
