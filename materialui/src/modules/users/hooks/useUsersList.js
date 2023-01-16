import api from "../../../api";
import { useEffect, useState } from "react";

export default function useUsersList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get("users").then(({ data }) => {
      setList(data);
      setLoading(false);
    });
  }, []);

  function deleteUsers(id) {
    api.delete("users/" + id).then(() => {
      setList(list.filter((item) => item.id !== id));
      setLoading(false);
    });
  }
  return { list, deleteUsers, loading };
}
