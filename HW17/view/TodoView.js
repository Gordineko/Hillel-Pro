class TodoView {
  static CLASSES = {
    TODO_ITEM: ".todo__item",
    BTN_DONE: "todo__btn--done",
    BTN_REMOVE: "todo__btn--remove",
    BTN_EDIT: "todo__btn--edit",
    TODO_TEXT_SELECTOR: "todo__text",
  };
  #el = null;
  constructor(el) {
    this.#el = el;
  }
  static todoTemplate = `
        <li class="todo__item list-group-item  d-flex justify-content-between align-items-center" data-id="{{id}}">
                    <div class="todo__text {{todoDone}}" >
                        {{title}}
                    </div>
                    <div class="todo__tools">
                        <div class="btn btn-secondary btn todo__btn todo__btn--edit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>
                        <div class="btn btn-danger todo__btn todo__btn--remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </div>
                    </div>
                </li>
        `;
  generateComponent({ id, title, isDone }) {
    return TodoView.todoTemplate
      .replaceAll("{{title}}", title)
      .replaceAll("{{id}}", id)
      .replaceAll("{{todoDone}}", isDone ? TodoView.CLASSES.BTN_DONE : "");
  }
  init(handler) {
    const btnAddTodo = document.querySelector(".todo__btn--add-todo");
    btnAddTodo.addEventListener("click", () => this.addTodo(handler));
  }
  getParent(element) {
    return element.closest(TodoView.CLASSES.TODO_ITEM);
  }
  getTodoId(element) {
    const parent = this.getParent(element);
    return parent ? parent.dataset.id : null;
  }
  addTodo(handler) {
    console.log(handler);
    const enterInput = document.querySelector(".todo__input");
    handler.addTodo({
      title: enterInput.value,
      isDone: false,
    });
  }

  createEditField(element) {
    const parent = this.getParent(element);
    const todoTextSelector = parent.querySelector(
      `.${TodoView.CLASSES.TODO_TEXT_SELECTOR}`
    );
    const btnEdit = parent.querySelector(`.todo__btn--edit`);
    const input = document.createElement("input");
    input.className = "form-control";
    input.placeholder = todoTextSelector.textContent.trim();
    todoTextSelector.textContent = "";
    btnEdit.classList.remove("btn-secondary");
    btnEdit.classList.add("btn-success");
    btnEdit.classList.add("btn--edit-active");
    parent.insertBefore(input, todoTextSelector);
  }
  saveInput(element) {
    const parent = this.getParent(element);
    const todoTextSelector = parent.querySelector(
      `.${TodoView.CLASSES.TODO_TEXT_SELECTOR}`
    );
    const btnEdit = parent.querySelector(`.todo__btn--edit`);
    const input = parent.querySelector(`input`);
    const inputVal = input.value;
    todoTextSelector.textContent = inputVal;
    input.remove();
    btnEdit.classList.add("btn-secondary");
    btnEdit.classList.remove("btn-success");
    btnEdit.classList.remove("btn--edit-active");
    return {
      id: parent?.dataset.id,
      title: inputVal,
      isDone: false,
    };
  }
  actionsListTodo(handler) {
    this.#el.addEventListener("click", (event) => {
      const target = event.target;
      const id = this.getTodoId(target);
      if (target.classList.contains(TodoView.CLASSES.BTN_REMOVE)) {
        handler.removeTodo(id);
      }
      if (
        target.classList.contains(TodoView.CLASSES.BTN_EDIT) &&
        !target.classList.contains("btn--edit-active")
      ) {
        this.createEditField(target);
      } else if (
        target.classList.contains(TodoView.CLASSES.BTN_EDIT) &&
        target.classList.contains("btn--edit-active")
      ) {
        const obj = this.saveInput(target);
        handler.editTodo(obj);
      }
    });
  }
  renderTodo(todoList) {
    this.#el.innerHTML = todoList.map(this.generateComponent).join("");
  }
}
