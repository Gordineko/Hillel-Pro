import "./Name.css";

import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <li className={"list_item " + (this.props.list.isDone ? "done" : "")}>
        {this.props.list.name}
      </li>
    );
  }
}
