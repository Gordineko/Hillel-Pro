import React, { Component } from "react";
import TodoListComponent from "../TodoListComponent/TodoListComponent";
import Button from "../Button/Button";
import "./Todolist.css";
export default class Todolist extends Component {
  render() {
    return (
      <div className="list">
        <div className="list_monetor">
          {this.props.list.map((item) => (
            <div className="todo_item" key={item.id}>
              <TodoListComponent listItem={item} />
              <Button
                listItem={item}
                onToggle={this.props.onToggle}
                onDelete={this.props.onDelete}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
