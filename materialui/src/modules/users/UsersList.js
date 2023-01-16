import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useUsersList from './hooks/useUsersList'
import CircularProgress from '@mui/material/CircularProgress';
function UsersList() {
  
  const {list,deleteUsers} = useUsersList();
  return (
    <TableContainer component={Paper}>
      <CircularProgress />
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
          {list.map(item=>(
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.surname}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">
               <Button variant='contained' to={item.id} component={NavLink}>Edd</Button>
               <Button onClick={()=>deleteUsers(item.id)} variant='contained' color='error'>Dell</Button>
                </TableCell>
                </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  )
}

export default UsersList