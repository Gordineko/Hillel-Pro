const fistInput = document.querySelector(".operantA");
const secondInput = document.querySelector(".operantB");
const button = document.querySelector(".calc");
const txtInput = document.querySelector(".ansver");
const action = document.querySelector(".action");
let ansver = checkAction(fistInput.value, action.value, secondInput.value);
function onBtnClick(event) {
  event.preventDefault();
  txtInput.textContent =
    fistInput.value +
    action.value +
    secondInput.value +
    "=" +
    checkAction(ansver);
}
button.addEventListener("click", onBtnClick);

function checkAction() {
  switch (action.value) {
    case "-":
      return +fistInput.value - +secondInput.value;

    case "+":
      return +fistInput.value + +secondInput.value;

    case "*":
      return +fistInput.value * +secondInput.value;

    case "/":
      return +fistInput.value / +secondInput.value;
  }
}
