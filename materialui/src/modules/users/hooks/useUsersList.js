import api from "../../../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectList } from "../../../store/selector/list";
import { deleteList } from "../../../store/action/list";
export default function useUsersList() {
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setList([])
  //   setTimeout(() => {
  //     api.get("users").then(({ data }) => setList(data))
  //         .finally(() => setLoading(false))
  // }, 2000)
  // }, []);

  const list = useSelector(selectList);
  console.log(list);
  // function deleteUsers(id) {
  //   api.delete("users/" + id).then(() => {
  //     setList(list.filter((item) => item.id !== id));

  //   });
  // }
  return { list };
}
