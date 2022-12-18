const URL_TODO = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/";

export function getInfo() {
  return fetch(URL_TODO).then((res) => res.json());
}
export function deleteTodo(id) {
  return fetch(URL_TODO + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
export function getTodo(todo) {
  return fetch(URL_TODO, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
}
export function complitTodo(obj) {
  return fetch(URL_TODO + obj.id, {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
}
