import "./App.css";
import List from "../List/List";
import { useEffect, useState } from "react";
import { getList, removeItem, createItem } from "../services/Listservice";
import Form from "../Form/Form";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList().then((data) => setList(data));
  }, []);

  function deletePerson(id) {
    removeItem(id).then(() => {
      setList(list.filter((item) => item.id !== id));
    });
  }
  function createNewlist(newList) {
    createItem({ ...newList, isDone: false }).then((data) =>
      setList([...list, data])
    );
  }

  return (
    <div className="container">
      <List persons={list} onDelete={deletePerson} />
      <Form onSave={createNewlist} />
    </div>
  );
}

export default App;
