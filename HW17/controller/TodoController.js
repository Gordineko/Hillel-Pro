class TodoController {
  #todoList = null;
  #model = null;
  #view = null;

  constructor(el) {
    this.#model = new TodoModel();
    this.#view = new TodoView(el);
    this.#view.actionsListTodo({
      removeTodo: (id) => this.removeTodo(id),
      editTodo: (obj) => this.editTodo(obj),
    });
    this.#view.init({
      addTodo: (obj) => this.addTodo(obj),
    });
    this.#model.getDataTodo().then((data) => {
      this.#view.renderTodo(data);
    });
  }

  removeTodo(id) {
    this.#model.removeTodo(id);
    this.#model.getDataTodo().then((data) => {
      this.#view.renderTodo(data);
    });
  }
  editTodo(obj) {
    this.#model.editTodo(obj);
    this.#model.getDataTodo().then((data) => {
      this.#view.renderTodo(data);
    });
  }
  addTodo(obj) {
    this.#model.addTodo(obj);
    this.#model.getDataTodo().then((data) => {
      this.#view.renderTodo(data);
    });
  }
}
