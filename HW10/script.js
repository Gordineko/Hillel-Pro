const phoneList = document.querySelector(".phone_list");
const btnList = document.querySelector(".btn_list");
const input = document.querySelector(".do");
const nameEl = document.querySelector(".name");
const surnameEl = document.querySelector(".surname");
const namberEl = document.querySelector(".namber");

btnList.addEventListener("click", addContsctBtnClick);

function addContsctBtnClick() {
  if (!validationInp()) {
    return;
  }
  const newCont = getValue();
  addPhoneList(newCont);
  returnInput();
}

function getValue() {
  return {
    name: nameEl.value,
    surname: surnameEl.value,
    namber: namberEl.value,
  };
}
function addPhoneList(contact) {
  const rowEl = generateContEl(contact);
  phoneList.append(rowEl);
}
function generateContEl({ name, surname, namber }) {
  const trEl = document.createElement("tr");

  trEl.append(CreatPhoneList(name, "name"));
  trEl.append(CreatPhoneList(surname, "surname"));
  trEl.append(CreatPhoneList(namber, "namber"));
  trEl.append(createBtnClear(trEl));
  trEl.append(createBtnCorrect(trEl));

  return trEl;
}

function CreatPhoneList(value, classes = "") {
  const tdEl = document.createElement("td");
  tdEl.textContent = value;
  tdEl.className = classes;
  return tdEl;
}

function createBtnClear(trEl) {
  const btnEl = document.createElement("button");
  const image = document.createElement("img");
  image.src = "./free-icon-multiply-399274.png";
  btnEl.append(image);
  image.classList.add("icon_none");
  btnEl.classList.add("btn_clear_style");
  btnEl.addEventListener("click", () => clearList(trEl));
  return btnEl;
}
function createBtnCorrect(tdEl) {
  const btnEl = document.createElement("button");
  const image = document.createElement("img");
  image.src = "./free-icon-correction-4693121.png";
  btnEl.append(image);
  image.classList.add("icon_none");
  btnEl.classList.add("btn_clear_style");
  btnEl.addEventListener("click", () => editItem(tdEl));
  return btnEl;
}

function clearList(trEl) {
  trEl.remove();
}

function editItem(tdEl) {
  nameEl.value = tdEl.querySelector(".name").textContent;
  surnameEl.value = tdEl.querySelector(".surname").textContent;
  namberEl.value = tdEl.querySelector(".namber").textContent;

  btnList.addEventListener("click", () => clearList(tdEl));
}

function returnInput() {
  nameEl.value = "";
  surnameEl.value = "";
  namberEl.value = "";
}
function validationInp() {
  resetValid();
  if (nameEl.value.trim() === "") {
    nameEl.classList.add("invalid");
    return false;
  }
  if (surnameEl.value.trim() === "") {
    surnameEl.classList.add("invalid");
    return false;
  }
  if (namberEl.value.trim() === "" || Number.isNaN(+namberEl.value)) {
    namberEl.classList.add("invalid");
    return false;
  }
  return true;
}

function resetValid() {
  nameEl.classList.remove("invalid");
  namberEl.classList.remove("invalid");
  surnameEl.classList.remove("invalid");
}
