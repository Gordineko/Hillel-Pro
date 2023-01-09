import React from "react";
import "./Form.css";
import UsersService from "../services/UsersService";

function Form() {
  function createUser(obj) {
    UsersService.create(
      obj
    ).then(() => {
      
    });
  }
  function onFormSubmit(e) {
    e.preventDefault();
    createUser({
      name: e.target.name.value,
      surname: e.target.name.value,
      email: e.target.name.value,
    })
    e.target.reset();
  }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input name="name" className="name" placeholder="name"></input>
      <input name="surname" className="surname" placeholder="surname"></input>
      <input name="email" className="email" placeholder="email"></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
