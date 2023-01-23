import api from "../../api";
export const DELETE_USER = "DELETE_LIST";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";
export const SET_LOADER = "SET_LOADER";
export const setLoader = (payload) => (dispatch) => {
  return dispatch({ type: SET_LOADER, payload });
};
export const addUser = (payload) => (dispatch) => {
  dispatch(setLoader(true));
  return api.post(`users`, payload).then(({ data }) => {
    dispatch({ type: ADD_USER, payload: data });
    dispatch(setLoader(false));
  });
};
export const updateUser = (payload) => (dispatch) => {
  dispatch(setLoader(true));
  return api.put(`users/${payload.id}`, payload).then(({ data }) => {
    dispatch({ type: UPDATE_USER, payload: data });
    dispatch(setLoader(false));
  });
};
export const deleteUser = (id) => (dispatch) => {
  dispatch(setLoader(true));

  return api.delete(`users/${id}`).then(({ data }) => {
    dispatch({ type: DELETE_USER, payload: data.id });
    dispatch(setLoader(false));
  });
};
export function getUsers() {
  return function (dispatch) {
    dispatch(setLoader(true));

    return api.get("users").then(({ data }) => {
      dispatch({ type: SET_USERS, payload: data });
      dispatch(setLoader(false));
    });
  };
}
