import { createStore } from "redux";
import todosReducer from "./reduces/todosReducer";

const store = createStore(todosReducer);

export default store;
