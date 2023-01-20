import { createStore } from "redux";
import listReducer from "./reducer/listReducer";


const store = createStore(listReducer);

export default store;
