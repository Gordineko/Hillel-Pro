import "./Surname.css";

import React, { Component } from "react";

export default class Surname extends Component {
  render() {
    return (
      <li className={"list_item " + (this.props.list.isDone ? "done" : "")}>
        {this.props.list.surname}
      </li>
    );
  }
}
