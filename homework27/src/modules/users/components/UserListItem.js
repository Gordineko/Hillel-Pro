import React from 'react'
import './UserListItem.css'
import { Link } from "react-router-dom";

function UserListItem({user:{id,name,surname,email},onDelete}) {
  return (<>
    
    <ul className="list_persones">
      <button onClick={()=>onDelete(id)} className='btn_clear'>X</button>
    <li>
      <Link to={`/edit/${id}`}>{name}</Link>
    </li>
    <li>{surname}</li>
    <li>{email}</li>
    </ul>
        </>
  )
}

export default UserListItem