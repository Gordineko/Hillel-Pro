import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    
      this.props.onSave({
        title: e.target.elements.title.value,
      });
    

    e.target.reset();
  };

  render() {
    return (
      <form className="form-group" onSubmit={this.onFormSubmit}>
        <input name="title" className="form-control" placeholder="todo" />
        <button className="btn btn-dark inp_btn">Dark</button>
        <div className="phone_button">
          <div className="black_border"></div>
        </div>
      </form>
    );
  }
}
