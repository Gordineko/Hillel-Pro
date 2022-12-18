import React, { Component } from "react";
import "./Button.css";
export default class Button extends Component {
  onClick = () => {
    this.props.onToggle({
      ...this.props.listItem,
      isDone: !this.props.listItem.isDone,
    });
  };
  onDeleteClick = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.listItem.id);
  };
  render() {
    return (
      <div>
        <button className="btn btn-dark" onClick={this.onClick}>
          Complited
        </button>
        <button className="btn btn-dark" onClick={this.onDeleteClick}>
          Delete
        </button>
      </div>
    );
  }
}
