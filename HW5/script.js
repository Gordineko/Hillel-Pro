let arr;
let answer;
let min;
let action;
action = checkAction("Выберете действие");
function checkAction(msg) {
  let action = prompt(msg);
  switch (action) {
    case "-":
      const min = splitString();
      totalMin(min);
      arr = arr.join("-");
      break;

    case "+":
      const answer = splitString();
      actionSum(answer);
      arr = arr.join("+");
      break;

    case "*":
      const Multipli = splitString();
      totalMultiplication(Multipli);
      arr = arr.join("*");
      break;

    case "/":
      const division = splitString();
      totalDivision(division);
      arr = arr.join("/");
      break;

    default:
      return checkAction(msg);
  }
}
alert(`${arr} = ${answer}`);

function checkNamber(msg) {
  let result;
  do {
    result = prompt(msg);
  } while (result === null || result.trim() === "");
  return result;
}
function splitString() {
  let str = checkNamber("введите числа");
  arr = str.split(",");

  return arr;
}
function actionSum(arr) {
  answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += +arr[i];
  }
  return answer;
}
function totalMin(arr) {
  answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer -= +arr[i];
    if (i === 1) {
      answer = arr[0];
      answer -= arr[i];
    }
  }

  return answer;
}
function totalDivision(arr) {
  answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer /= +arr[i];
    if (i === 1) {
      answer = arr[0];
      answer /= arr[i];
    }
  }
  return answer;
}
function totalMultiplication(arr) {
  answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer *= +arr[i];
    if (i === 1) {
      answer = arr[0];
      answer *= arr[i];
    }
  }
  return answer;
}
