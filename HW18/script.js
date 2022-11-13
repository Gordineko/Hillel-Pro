const URL_STICKER = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";
const btn_add = document.querySelector(".btn-outline-dark");
const cards = document.querySelector(".cards");
const stickerTemplate = `

<div class="card text-bg-dark "data-id="{{id}}">
    <div class="card-header">Stiker<button type="button" class="btn  btn-outline-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path class="card_remove"
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
        </button>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px">{{description}}</textarea>
            <label for="floatingTextarea2" style="color: black;">What?</label>
        </div>
    </div>

</div>`;
let list = [];
btn_add.addEventListener("click", addSticker);
cards.addEventListener("click", clickDeleteSticker);
addClickEditCard();

function addClickEditCard() {
  cards.addEventListener("focusout", (e) => {
    if (e.target.classList.contains("form-control")) {
      saveEditTxt(e.target);
    }
  });
}

function saveEditTxt(target) {
  const id = getStickerId(target);

  editSticker(id, { description: target.value });
}

function editSticker(id, obj) {
  const sticker = list.find((item) => item.id === id);

  fetch(URL_STICKER + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => renderStickers(), (sticker.description = obj.description));
}

function getStickerId(target) {
  const parent = target.closest(".card");
  return parent ? parent.dataset.id : null;
}
function clickDeleteSticker(e) {
  const id = getStickerId(e.target);
  if (e.target.classList.contains("card_remove")) {
    deleteUser(id);
  }
}
function deleteUser(id) {
  const filteredList = list.filter((item) => item.id !== id);
  fetch(`${URL_STICKER}${id}`, {
    method: "DELETE",
  }).then(() => {
    list = filteredList;
    renderStickers();
  });
}
getCard();

function getCard() {
  return fetch(URL_STICKER)
    .then((res) => res.json())
    .then((data) => {
      list = data;
      renderStickers();
    });
}

function addSticker() {
  createSticker().then((res) => renderSticker(res));
}
function generateSticker({ id, title, description }) {
  return stickerTemplate
    .replaceAll("{{title}}", title)
    .replaceAll("{{description}}", description)
    .replaceAll("{{id}}", id);
}

function renderSticker(data) {
  const block = document.createElement("div");
  block.className = "mb-3 col-lg-3 col-12 col-md-4";
  block.innerHTML = generateSticker({
    id: data.id,
    title: data.id + " title",
    description: data.description,
  });
  cards.append(block);
}

function renderStickers() {
  cards.innerHTML = "";
  list.forEach((item) => {
    renderSticker(item);
  });
}

function createSticker() {
  return fetch(URL_STICKER, {
    method: "POST",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
function deleteSticker() {
  return fetch(URL_STICKER, {
    method: "DELETE",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
