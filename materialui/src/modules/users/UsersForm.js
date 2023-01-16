import { TextField,Paper, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import useUser from './hooks/useUser'
const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function UsersForm() {
  const {id}=useParams();
  const{user,changeUser,saveUser}=useUser(id)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
function validation(target) {
  switch(target.name) {
    case 'name':
      if(target.value.length < 3) {
        setErrors({...errors, name:'Error name'})
        return;
      }
      setErrors({...errors, name:''})
      break;
      case 'surname':
      if(target.value.length < 3) {
        setErrors({...errors, surname:'Error surname'})
        return;
      }
      setErrors({...errors, surname:''})
      break;
      case 'email':
      if(!target.value.toLowerCase().match(EMAIL_REGEXP)) {
        setErrors({...errors, email:'Error email'})
        return;
      }
      setErrors({...errors, email:''})
      break;
      
  }
}
function onInputChange(e){
  changeUser({
    [e.target.name]:e.target.value,
  })
  validation(e.target)
}

function onFormSubmit(e){
e.preventDefault();


saveUser(user).then(()=>navigate('..'))



}

  return (
    <Paper sx={{ marginTop: '20px' }}>
      <form onSubmit={onFormSubmit}>
      <TextField error={!!errors?.name} helperText={errors?.name} label="Name" variant='outlined' fullWidth name='name' value={user.name} onChange={onInputChange} />
      <TextField error={!!errors?.surname} helperText={errors?.surname} label="Surname" variant='outlined' fullWidth name='surname' value={user.surname} onChange={onInputChange}/>
      <TextField  error={!!errors?.email} helperText={errors?.email} label="Email" variant='outlined' fullWidth name='email' value={user.email} onChange={onInputChange} />
      <Button type='submit' color="primary" variant='contained'>Save</Button>
      <Button to={'..'} component={NavLink}>Cancel</Button>
      </form>
    </Paper>
  )
}

export default UsersForm