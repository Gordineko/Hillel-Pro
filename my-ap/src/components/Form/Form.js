import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSave({
      name: e.target.elements.name.value,
      surname: e.target.elements.surname.value,
      email: e.target.elements.email.value,
    });

    e.target.reset();
  };

  render() {
    return (
      <form className="input_colum" onSubmit={this.onFormSubmit}>
        <input className="form-control" name="name" placeholder="name"></input>
        <input
          className="form-control"
          name="surname"
          placeholder="surname"
        ></input>
        <input
          className="form-control"
          name="email"
          placeholder="email"
        ></input>
        <button className="btn btn-secondary">Save</button>
      </form>
    );
  }
}
