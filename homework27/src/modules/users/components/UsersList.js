import React from "react";
import "./UsersList.css";

import UserListItem from "./UserListItem";

function UserList({ users,onDelete }) {
  return (
    <div className="list">
    <div className='prew'>
    <div className='user_kolumn'><h3>name</h3></div>
    <div className='user_kolumn'><h3>surname</h3></div>
    <div className='user_kolumn'><h3>email</h3></div>

</div>
      {users.map((item) => (

        <UserListItem user={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
  
}

export default UserList;
