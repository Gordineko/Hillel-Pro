const inpName = document.querySelector(".name");
const inpSurname = document.querySelector(".surname");
const inpEmail = document.querySelector(".email");
const btnInp = document.querySelector(".btn_list");
const listBlock = document.querySelector(".phone_list");
const emailEl = document.querySelector(".list");
let list = [];
const BASE_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/";

btnInp.addEventListener("click", addClick);
function addClick() {
  if (!valInp()) return;
  const newCont = getValueEl();
  addUser(newCont);
  createPhoneList(newCont);
  resetInp();
}

function getUsers() {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      list = data;
      renderUsers();
    });
}
getUsers();
function deleteUser(id) {
  const filteredList = list.filter((item) => item.id !== id);
  fetch(`${BASE_URL}${id}`, {
    method: "DELETE",
  }).then(() => {
    list = filteredList;
  });
}
function addUser({ name, surname, email }) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email }),
  });
}
function editUser({ id, name, surname, email }) {
  const user = list.find((user) => user.id === id);
  user.name = name;
  user.surname = surname;
  user.email = email;
  fetch(BASE_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email }),
  }).then(() => renderUsers());
}
function getValueEl() {
  return {
    name: inpName.value,
    surname: inpSurname.value,
    email: inpEmail.value,
  };
}
function renderUser(user) {
  createPhoneList(user);
}
function renderUsers() {
  listBlock.innerHTML = "";
  list.forEach((user) => renderUser(user));
}
function createPhoneList(contact) {
  const RowEl = addTr(contact);
  RowEl.classList.add("list");
  listBlock.append(RowEl);
  return RowEl;
}

function addTr({ id, name, surname, email }) {
  let trEl = document.createElement("tr");
  trEl.append(addTh(name, "name"));
  trEl.dataset.id = id;
  trEl.append(addTh(surname, "surname"));
  trEl.append(addTh(email, "email"));
  trEl.append(creatClearEl(trEl));
  trEl.append(createBtnCorrect(trEl));
  clearAddClick(trEl, trEl);
  correctAddClick(trEl, trEl);
  return trEl;
}

function addTh(elem, classes = "") {
  let tdEl = document.createElement("td");
  tdEl.textContent = elem;
  tdEl.className = classes;
  return tdEl;
}

function resetInp() {
  (inpName.value = ""), (inpSurname.value = ""), (inpEmail.value = "");
}

function valInp() {
  valReset();
  if (inpName.value.trim() === "") {
    inpName.classList.add("invalid");
    return false;
  }
  if (inpSurname.value.trim() === "") {
    inpSurname.classList.add("invalid");
    return false;
  }
  if (inpEmail.value.trim() === "") {
    inpEmail.classList.add("invalid");
    return false;
  }
  return true;
}

function valReset() {
  inpName.classList.remove("invalid");
  inpSurname.classList.remove("invalid");
  inpEmail.classList.remove("invalid");
}

function creatClearEl() {
  let btnClear = document.createElement("button");
  btnClear.textContent = "delete";
  btnClear.classList.add("delete");

  return btnClear;
}

function clearAddClick(emailEl, trEl) {
  emailEl.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete")) {
      deleteUser(trEl.dataset.id);
      renderUsers();
    }
  });
}

function createBtnCorrect() {
  let btnCorrect = document.createElement("button");
  btnCorrect.textContent = "correct";
  btnCorrect.classList.add("correct");
  return btnCorrect;
}
let idx = 0;
function editBtn() {
  let data = {
    id: idx,
    name: inpName.value,
    surname: inpSurname.value,
    email: inpEmail.value,
  };
  editUser(data);
  toggleBtn("add");
}
function toggleBtn(val) {
  switch (val) {
    case "edit":
      btnInp.textContent = "Edit";
      btnInp.removeEventListener("click", addClick);
      btnInp.addEventListener("click", editBtn);
      break;
    case "add":
      btnInp.textContent = "Add";
      btnInp.removeEventListener("click", editBtn);
      btnInp.addEventListener("click", addClick);
      break;
  }
}
function correctAddClick(emailEl, txEl) {
  emailEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("correct")) {
      const name = txEl.querySelector(".name").textContent;
      const surname = txEl.querySelector(".surname").textContent;
      const email = txEl.querySelector(".email").textContent;
      const id = txEl.dataset.id;
      inpName.value = name;
      inpSurname.value = surname;
      inpEmail.value = email;
      idx = id;
      toggleBtn("edit");
    }
  });
}

// function correctList() {
//   if (
//     txEl.querySelector(".name").textContent === inpName.value ||
//     txEl.querySelector(".surname").textContent === inpSurname.value ||
//     txEl.querySelector(".email").textContent === inpEmail.value
//   ) {
//     inpName.value === txEl.querySelector(".name").textContent;
//     inpSurname.value === txEl.querySelector(".surname").textContent;
//     inpEmail.value === txEl.querySelector(".email").textContent;
//   }
// }

function clearList(trEl) {
  trEl.remove();
}
