import { CREATE_LIST, DELETE_LIST, TOGGLE_LIST } from "../actions/list";


const INITIAL_STATE = {
  list: [
    { id: 1, name:'Danil', surname:'Go123213r',email:'444@gmail.com' },
    { id: 2,  name:'DD', surname:'G11or',email:'123123123@gmail.com' },
    { id: 3,  name:'Egor', surname:'asdasdr',email:'qwewqe@gmail.com' },
    { id: 4,  name:'Den', surname:'Gafe',email:'123asda@gmail.com' },
  ],
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case  TOGGLE_LIST:
    return {
      ...state,
      list: state.list.map((item) => payload !== item.id? item:{...item,isDone:!item.isDone}),
    };
    case DELETE_LIST:
      return {
        ...state,
        list: state.list.filter((item) => payload !== item.id),
      };
    case CREATE_LIST:
      return {
    ...state,list:[...state.list,{id :Date.now(), ...payload,}]
      };
    default:
      return state;
  }
}
