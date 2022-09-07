let operant,
  action,
  quantities,
  all,
  sum,
  sample = "";

checkAction("Выберете действие");
function checkAction(msg) {
  action = prompt(msg);
  switch (action) {
    case "-":
      quantities = +checkField("Cкольок чисел нужно ?");
      totalMin("Введите число");
      break;

    case "+":
      quantities = +checkField("Cкольок чисел нужно ?");
      totalSum("Введите число");
      break;

    case "*":
      quantities = +checkField("Cкольок чисел нужно ?");
      totalMultiplication("Введите число");
      break;

    case "/":
      quantities = +checkField("Cкольок чисел нужно ?");
      totalDivision("Введите число");
      break;

    default:
      return checkAction(msg);
  }
}

alert(`${sample}=${sum}`);

function checkField(msg) {
  let result;
  do {
    result = prompt(msg);
  } while (
    result === null ||
    result.trim() === "" ||
    Number.isNaN(+result) ||
    result < 2
  );
  return result;
}
function checkNamber(msg) {
  let result;
  do {
    result = prompt(msg);
  } while (result === null || result.trim() === "" || Number.isNaN(+result));
  return result;
}

function totalSum(msg) {
  sum = 0;
  for (let i = 1; i <= quantities; i++) {
    operant = +checkNamber(msg);

    if (i === 1) {
      sum = operant;
      sample += operant;
    } else {
      sum += operant;
      sample += action + operant;
    }
  }

  return sum;
}
function totalMultiplication(msg) {
  sum = 0;
  for (let i = 1; i <= quantities; i++) {
    operant = +checkNamber(msg);
    if (i === 1) {
      sum = operant;
      sample += operant;
    } else {
      sum *= operant;
      sample += action + operant;
    }
  }

  return sum;
}
function totalMin(msg) {
  sum = 0;
  for (let i = 1; i <= quantities; i++) {
    operant = +checkNamber(msg);

    if (i === 1) {
      sum = operant;
      sample += operant;
    } else {
      sum -= operant;
      sample += action + operant;
    }
  }
  return sum;
}
function totalDivision(msg) {
  sum = 0;
  for (let i = 1; i <= quantities; i++) {
    operant = +checkNamber(msg);
    if (i === 1) {
      sum = operant;
      sample += operant;
    } else {
      sum /= operant;
      sample += action + operant;
    }
  }

  return sum;
}
