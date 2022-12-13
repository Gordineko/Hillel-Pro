import "./App.css";

import { Component } from "react";
import List from "../List/List";
import Form from "../Form/Form";

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "Danil",
        surname: "Gord",
        email: "danil@gmail.com",
        isDone: true,
      },
      {
        id: 2,
        name: "Bob",
        surname: "Serf",
        email: "bob@gmail.com",
        isDone: false,
      },
      {
        id: 3,
        name: "Den",
        surname: "Mens",
        email: "den@gmail.com",
        isDone: false,
      },
    ],
  };

  toggleList = (id) => {
    this.setState({
      list: this.state.list.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              isDone: !item.isDone,
            }
      ),
    });
  };

  deleteItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };
  createTodo = (el) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          ...el,
          id: Date.now(),
          isDone: false,
        },
      ],
    });
  };
  render() {
    return (
      <>
        <div className="contact-pre">
          <p>Name</p>
          <p>surname</p>
          <p>email</p>
        </div>
        <List
          list={this.state.list}
          onToggle={this.toggleList}
          onDelete={this.deleteItem}
        />
        <Form onSave={this.createTodo} />
      </>
    );
  }
}

export default App;
