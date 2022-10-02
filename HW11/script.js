// const listEl = document.querySelector(".do_list_element");
// const listBtn = document.querySelector(".list_btn");
// const operant = document.querySelector(".do");
// const inpBtn = document.querySelector(".input_btn");
// const mainListEl = document.querySelector(".list");
// const list = [
//   {
//     id: 1,
//     title: "hi word",
//     isCheck: false,
//   },
//   {
//     id: 2,
//     title: "hello world",
//     isCheck: false,
//   },
//   {
//     id: 3,
//     title: "word",
//     isCheck: false,
//   },
// ];
// inpBtn.addEventListener("click", addList);

// function addList(event, btnBlock) {
//   event.preventDefault();

//   if (!inputVal()) {
//     return;
//   }
//   const divEl = document.createElement("div");
//   divEl.classList.add("do_list_element");
//   const contentDiv = document.createElement("span");
//   contentDiv.textContent = operant.value;
//   btnBlock = document.createElement("div");
//   const btnList = document.createElement("button");
//   btnList.classList.add("list_btn");
//   btnList.textContent = "complit";
//   const img = document.createElement("img");
//   img.src = "./free-icon-check-mark-5290058.png";

//   divEl.append(contentDiv);
//   divEl.append(img);
//   divEl.append(btnBlock);
//   btnBlock.append(btnList);
//   addClearBtn(btnBlock);
//   mainListEl.append(divEl);

//   divEl.addEventListener("click", (event) => {
//     if (event.target.classList.contains("list_btn")) {
//       addBtnOnList(img);
//     }
//   });
//   divEl.addEventListener("click", (event) => {
//     if (event.target.classList.contains("list_btn_clear")) {
//       divEl.remove();
//     }
//   });
//   clearInput();
// }

// list.forEach((item) => {
//   const divEl = document.createElement("div");
//   divEl.classList.add("do_list_element");
//   const contentDiv = document.createElement("span");
//   contentDiv.textContent = item.title;
//   btnBlock = document.createElement("div");
//   const btnList = document.createElement("button");
//   btnList.classList.add("list_btn");
//   btnList.textContent = "complit";
//   const img = document.createElement("img");
//   img.src = "./free-icon-check-mark-5290058.png";

//   divEl.append(contentDiv);
//   divEl.append(img);
//   divEl.append(btnBlock);
//   btnBlock.append(btnList);
//   addClearBtn(btnBlock);
//   mainListEl.append(divEl);

//   divEl.addEventListener("click", (event) => {
//     if (event.target.classList.contains("list_btn")) {
//       addBtnOnList(img);
//     }
//   });
//   divEl.addEventListener("click", (event) => {
//     if (event.target.classList.contains("list_btn_clear")) {
//       divEl.remove();
//     }
//   });
// });
// function addClearBtn(btnBlock) {
//   clrBtn = document.createElement("button");
//   clrBtn.classList.add("list_btn_clear");
//   clrBtn.textContent = "delet";
//   btnBlock.append(clrBtn);
// }

// function addBtnOnList(img) {
//   img.classList.toggle("icon");
// }

// function clearInput() {
//   operant.value = "";
// }

// function inputVal() {
//   resetInputVal();
//   if (operant.value.trim() === "") {
//     operant.classList.add("inval");
//     return false;
//   }
//   return true;
// }

// function resetInputVal() {
//   operant.classList.remove("inval");
// }
const DELETE_BTN_CLASS = "list_btn";
const EDIT_BTN_CLASS = "list_btn_clear";
const listEl = document.querySelector(".do_list_element");
const listElements = document.querySelector(".list__inner");

const listBtn = document.querySelector(".list_btn");
const operant = document.querySelector(".do");
const inpBtn = document.querySelector(".input_btn");
const mainListEl = document.querySelector(".list");

const taskItemTemplate = document.querySelector(".todoItemTemplate").innerHTML;
let list = [
  {
    id: 1,
    title: "hi word",
    isCheck: false,
  },
  {
    id: 2,
    title: "hello world",
    isCheck: false,
  },
  {
    id: 3,
    title: "word",
    isCheck: false,
  },
];
renderTodos();
function setCheckTodo(id) {
  list.find((item) => {
    if (item.id === id) {
      item.isCheck = !item.isCheck;
    }
  });
  renderTodos();
}
function addTodo(todo) {
  list.push(todo);
  renderTodos();
}
function removeTodo(id) {
  list = list.filter((item) => item.id !== id);
  renderTodos();
}

inpBtn.addEventListener("click", onBtnClick);
function onBtnClick(event) {
  event.preventDefault();
  if (!inputVal()) {
    return;
  } else {
    const newTodo = getFormData();
    addTodo(newTodo);
    clearInput();
  }
}

function getLastId() {
  return list[list.length - 1].id;
}
function getFormData() {
  return {
    id: getLastId() + 1,
    title: operant.value,
    isCheck: false,
  };
}
function renderTodos() {
  listElements.innerHTML = "";
  list.forEach((item) => renderTodo(item));
}

function renderTodo(todo) {
  const todoHtml = generateTodoHtml(todo);
  listElements.insertAdjacentHTML("beforeend", todoHtml);
}

function generateTodoHtml(todo) {
  const template = taskItemTemplate
    .replaceAll("{{title}}", todo.title)
    .replaceAll("{{id}}", todo.id)
    .replaceAll("{{isCheck}}", todo.isCheck ? "icon" : "");

  return template;
}
const divL = document.querySelector(".list__inner");
divL.addEventListener("click", onBtnClear);
divL.addEventListener("click", onBtnCheck);
function onBtnClear(event) {
  if (event.target.classList.contains("list_btn_clear")) {
    removeTodo(+event.target.closest(".do_list").dataset.id);
  }
}
function onBtnCheck(event) {
  if (event.target.classList.contains("list_btn")) {
    setCheckTodo(+event.target.closest(".do_list").dataset.id);
  }
}

function clearInput() {
  operant.value = "";
}

function inputVal() {
  resetInputVal();
  if (operant.value.trim() === "") {
    operant.classList.add("inval");
    return false;
  }
  return true;
}

function resetInputVal() {
  operant.classList.remove("inval");
}
