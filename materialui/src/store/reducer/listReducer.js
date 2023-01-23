import { DELETE_USER, SET_USERS, ADD_USER, SET_LOADER } from "../action/list";

const INITIAL_STATE = {
  is_loading: false,
  list: [],
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        list: state.list.filter((item) => payload !== item.id),
      };
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case SET_USERS:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}
