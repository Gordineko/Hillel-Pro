const DELETE_BTN_CLASS = "list_btn";
const EDIT_BTN_CLASS = "list_btn_clear";
const listEl = document.querySelector(".do_list_element");
const listElements = document.querySelector(".list__inner");

const listBtn = document.querySelector(".list_btn");
const operant = document.querySelector(".do");
const inpBtn = document.querySelector(".input_btn");
const mainListEl = document.querySelector(".list");

const taskItemTemplate = document.querySelector(".todoItemTemplate").innerHTML;
let list = [];

init();
function setCheckTodo(id) {
  list.find((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
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
    completed: false,
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
    .replaceAll("{{isCheck}}", todo.completed ? "icon" : "");

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

function init() {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      list = data;
      renderTodos(list);
    });
  renderTodos(list);
}
