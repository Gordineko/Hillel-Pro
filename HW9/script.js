const listEl = document.querySelector(".do_list_element");
const listBtn = document.querySelector(".list_btn");
const operant = document.querySelector(".do");
const inpBtn = document.querySelector(".input_btn");
const list = document.querySelector(".list");

inpBtn.addEventListener("click", addList);

function btnCheckMark(iconCtx) {
  iconCtx.classList.toggle("icon");
}

function addList(event) {
  event.preventDefault();
  const newDiv = listEl.cloneNode(true);
  const newDivIcon = newDiv.querySelector(".img");
  newDiv
    .querySelector(".list_btn")
    .addEventListener("click", () => btnCheckMark(newDivIcon));

  const txt = newDiv.querySelector(".text");
  txt.textContent = operant.value;
  document.querySelector(".list").appendChild(newDiv);
}

function addMarks() {
  const elements = list.querySelectorAll(".do_list_element");
  elements.forEach((element) => {
    element.querySelector(".img").classList.add("icon");
  });
}

function removeMarks() {
  const elements = list.querySelectorAll(".do_list_element");
  elements.forEach((element) => {
    element.querySelector(".img").classList.remove("icon");
  });
}
const fistListElement = list.querySelectorAll(".do_list_element")[0];
const fistListElementBtn = fistListElement.querySelector(".list_btn");
fistListElementBtn.addEventListener("click", () => {
  const elements = list.querySelectorAll(".do_list_element");
  let flag = false;
  elements.forEach((element) => {
    if (element.querySelector(".img").classList.contains("icon")) {
      flag = true;
    }
  });
  if (flag) {
    removeMarks();
  } else {
    addMarks();
  }
});
