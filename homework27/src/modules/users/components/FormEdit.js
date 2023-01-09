import React, {useEffect, useState,setState} from "react";
import {useParams} from 'react-router-dom';
import "./FormEdit.css";
import UsersService from "../services/UsersService";

function FormEdit() {
  const [user, setUser] = useState({
    id: null,
    name: '',
    surname: '',
    email: ''
  });
  const handleChange = event => {
    setUser({...user,
      [event.target.name]:event.target.value});
  };
  const params = useParams();
  useEffect(()=>{
    UsersService.getOne(params.id).then(setUser)
  },[])
  function updateUser(obj) {
    UsersService.update(obj)
  }
  function onFormSubmit(e) {
    e.preventDefault();
    updateUser({
      id: params.id,
      name: e.target.name.value,
      surname: e.target.name.value,
      email: e.target.name.value,
    })
    e.target.reset();
  }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input name="name" value={user.name} onChange={handleChange} className="name" placeholder="name"></input>
      <input name="surname" value={user.surname}  onChange={handleChange}  className="surname" placeholder="surname"></input>
      <input name="email" value={user.email} onChange={handleChange} className="email" placeholder="email"></input>
      <button>Edit</button>
    </form>
  );
}

export default FormEdit;
