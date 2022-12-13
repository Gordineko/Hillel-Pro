import "./Button.css";

import React, { Component } from "react";

export class Button extends Component {
  onClick = () => {
    this.props.onToggle(this.props.list.id);
  };
  onDeleteClick = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.list.id);
  };
  render() {
    return (
      <div>
        <button className="btn btn-light" onClick={this.onClick}>
          Completed
        </button>
        <button className="btn btn-dark" onClick={this.onDeleteClick}>
          Delete
        </button>
      </div>
    );
  }
}
export default Button;
