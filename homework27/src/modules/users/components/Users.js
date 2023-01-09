import React from 'react';
import UsersList from'./UsersList';
import { useEffect, useState } from "react";
import UsersService from "../services/UsersService";
import Form from "./Form";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    UsersService.getList().then(setUsers)
  },[])

  function deleteUser(id){
    UsersService.delete(id).then(()=>{setUsers(users.filter((item)=>item.id!==id))})
  }
  return (
   <>
   <UsersList  users={users} onDelete={deleteUser}  />
   </>
  )
}

export default Users