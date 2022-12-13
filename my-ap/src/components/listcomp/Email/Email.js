import "./Email";

import React, { Component } from "react";

export default class Email extends Component {
  render() {
    return (
      <li className={"list_item " + (this.props.list.isDone ? "done" : "")}>
        {this.props.list.email}
      </li>
    );
  }
}
