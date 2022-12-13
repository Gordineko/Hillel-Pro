import "./List.css";

import React, { Component } from "react";

import Button from "../listcomp/Button/Button";
import Email from "../listcomp/Email/Email";
import Name from "../listcomp/Name/Name";
import Surname from "../listcomp/Surname/Surname";

export default class List extends Component {
  render() {
    return (
      <>
        {this.props.list.map((item) => (
          <ul key={item.id} className="list_container">
            <Name list={item} />
            <Surname list={item} />
            <Email list={item} />
            <Button
              list={item}
              onToggle={this.props.onToggle}
              onDelete={this.props.onDelete}
            />
          </ul>
        ))}
      </>
    );
  }
}
