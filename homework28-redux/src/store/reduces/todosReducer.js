import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todos";


const INITIAL_STATE = {
  list: [
    { id: 1, title: "item 1", isDone: false },
    { id: 2, title: "item 2", isDone: true },
    { id: 3, title: "item 3", isDone: true },
    { id: 4, title: "item 4", isDone: false },
  ],
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case  TOGGLE_TODO:
    return {
      ...state,
      list: state.list.map((item) => payload !== item.id? item:{...item,isDone:!item.isDone}),
    };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => payload !== item.id),
      };
    case CREATE_TODO:
      return {
    ...state,list:[...state.list,{id :Date.now(), ...payload,isDone:false}]
      };
    default:
      return state;
  }
}
