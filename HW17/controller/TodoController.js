class TodoController {
    #todoList = null
    #model = null
    #view = null

    constructor(el) {

        this.#model = new TodoModel()
        this.#view = new TodoView(el)
        this.#view.action(this.removeTodo)
        this.#model.getDataTodo().then(data => {
            this.#view.renderTodo(data)
        })

    }
    removeTodo(msg) {
        console.log(msg)
    }
}
