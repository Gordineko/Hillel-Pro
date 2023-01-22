import { Button, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useUsersList from './hooks/useUsersList'

import Loader from './Loader/Loader';
import UsersListItem from './UsersListItem';
function UsersList() {
  
  const {list,deleteUsers} = useUsersList();
  const {loading} = useUsersList();
  return (
    <TableContainer component={Paper}>
     <Loader isLoading={loading}></Loader>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item)=>(
           <UsersListItem key={item.id} person={item}  />
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  )
}

export default UsersList