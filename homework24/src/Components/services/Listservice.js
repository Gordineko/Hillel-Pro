import { API_URL } from "../../config";

export function getList() {
  return fetch(API_URL).then((res) => res.json());
}
export function removeItem(id) {
  return fetch(API_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
export function createItem(newItem) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
