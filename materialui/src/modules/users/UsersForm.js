import { TextField,Paper, Button } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import useUser from './hooks/useUser'

function UsersForm() {
  const {id}=useParams();
  const{user,changeUser,saveUser}=useUser(id)
  const navigate = useNavigate()

function onInputChange(e){
  changeUser({
    [e.target.name]:e.target.value,
  })
}

function onFormSubmit(e){
e.preventDefault();


saveUser(user).then(()=>navigate('..'))

}

  return (
    <Paper sx={{ marginTop: '20xp' }}>
      <form onSubmit={onFormSubmit}>
      <TextField label="Name" variant='outlined' fullWidth name='name' value={user.name} onChange={onInputChange} />
      <TextField label="Surname" variant='outlined' fullWidth name='surname' value={user.surname} onChange={onInputChange}/>
      <TextField label="Email" variant='outlined' fullWidth name='email' value={user.email} onChange={onInputChange} />
      <Button type='submit' color="primary" variant='contained'>Save</Button>
      <Button to={'..'} component={NavLink}>Cancel</Button>
      </form>
    </Paper>
  )
}

export default UsersForm