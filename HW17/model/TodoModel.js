const API_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/"
class TodoModel {
    todoList = null
    fetchTodo() {
        return fetch(API_URL).then(res => res.json())
    }
    getDataTodo() {
        return this.fetchTodo().then(res =>this.todoList = res)
    }

    updateTodo(todo) {
        return fetch(API_URL + todo.id, {
            method:"PUT",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())

    }
    deleteTodo(id) {
        return fetch(API_URL + id, {
            method:"DELETE"
        }).then((res) => res.json())
    }
    toggleTodo(todo) {
        this.updateTodo(todo)
    }
    addTodo(todo) {
        return fetch(API_URL, {
            method:"POST",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
    }
}
