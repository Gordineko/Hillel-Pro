import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { deleteList } from '../../store/action/list';
import useUsersList from './hooks/useUsersList';

function UsersListItem({person}) {
    
    const dispatch = useDispatch();

    function onDeleteClick(e){
      e.stopPropagation();
      
      dispatch( deleteList(person.id))
    }
  return (
    <TableRow key={person.id}>
    <TableCell>{person.name}</TableCell>
    <TableCell align="right">{person.surname}</TableCell>
    <TableCell align="right">{person.email}</TableCell>
    <TableCell align="right">
     <Button variant='contained' to={person.id} component={NavLink}>Edd</Button>
     <Button onClick={onDeleteClick}  variant='contained' color='error'>Dell</Button>
      </TableCell>
      </TableRow>
  )
}

export default UsersListItem