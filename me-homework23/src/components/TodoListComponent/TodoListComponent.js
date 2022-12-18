import React, { Component } from "react";
import "./TodoListComponent.css";

export default class TodoListComponent extends Component {
  render() {
    return (
      <>
        <span className={"" + (this.props.listItem.isDone ? "done" : "")}>
          {this.props.listItem.title}
        </span>
      </>
    );
  }
}
