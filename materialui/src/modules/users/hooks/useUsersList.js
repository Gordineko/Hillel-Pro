import api from "../../../api";
import { useEffect, useState } from "react";

export default function useUsersList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setList([])
    setTimeout(() => {
      api.get("users").then(({ data }) => setList(data))
          .finally(() => setLoading(false))
  }, 2000)
  }, []);

 

  function deleteUsers(id) {
    api.delete("users/" + id).then(() => {
      setList(list.filter((item) => item.id !== id));
      
    });
  }
  return { list, deleteUsers, loading, };
}
