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
const listEl = document.querySelector(".do_list_element");
const listBtn = document.querySelector(".list_btn");
const operant = document.querySelector(".do");
const icon = document.querySelector(".img");
const inpBtn = document.querySelector(".input_btn");
const list = document.querySelector(".list");

function btnCheckMark() {
  icon.classList.toggle("icon");
}
listBtn.addEventListener("click", btnCheckMark);

function onBtnClick(event) {
  event.preventDefault();
  addList();
}
inpBtn.addEventListener("click", onBtnClick);

function addList() {
  const newDiv = listEl.cloneNode(true);
  newDiv.textContent = operant.value;
  document.querySelector(".list").append(newDiv);
}
