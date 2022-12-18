import "./App.css";
import { Component } from "react";

import Form from "../Form/Form";
import TodoList from "../Todolist/Todolist";
import { getInfo } from "../Service/Service";
import { deleteTodo } from "../Service/Service";
import { getTodo } from "../Service/Service";
import { complitTodo } from "../Service/Service";

class App extends Component {
  state = {
    list: [],
  };
  toggleList = (obj) => {
    complitTodo(obj).then(() => {
      this.setState({
        list: this.state.list.map((item) =>
          item.id !== obj.id
            ? item
            : {
                ...item,
                isDone: !item.isDone,
              }
        ),
      });
    });
  };
  deleteItem = (id) => {
    deleteTodo(id).then(() => {
      this.setState({
        list: this.state.list.filter((item) => item.id !== id),
      });
    });
  };
  createTodo = (el) => {
    getTodo(el).then((data) => {
      console.log(data);
      this.setState({
        list: [...this.state.list, data],
      });
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="todo_prew">
            <h1>Todolist</h1>
            <div className="front_micro"></div>
          </div>
          <TodoList
            list={this.state.list}
            onToggle={this.toggleList}
            onDelete={this.deleteItem}
          />
          <Form onSave={this.createTodo} />
        </div>
      </>
    );
  }
  componentDidMount() {
    getInfo().then((data) =>
      this.setState({
        list: data,
      })
    );
  }
}

export default App;
