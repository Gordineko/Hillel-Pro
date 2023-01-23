import { useEffect, useState } from "react";

import api from "../../../api";
import { addUser, updateUser } from "../../../store/action/list";
import { useDispatch } from "react-redux";
const EMPTY_USER = {
  name: "",
  surname: "",
  email: "",
};

export default function useUser(id) {
  const [user, setUser] = useState(EMPTY_USER);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isNaN(id)) {
      setUser(EMPTY_USER);
    } else {
      api.get("users/" + id).then(({ data }) => setUser(data));
    }
  }, [id]);

  function changeUser(diff) {
    setUser({ ...user, ...diff });
  }
  function saveUser(user) {
    if (user.id) {
      return dispatch(updateUser(user));
    } else {
      return dispatch(addUser(user));
    }
  }

  return {
    user,
    changeUser,
    saveUser,
  };
}
