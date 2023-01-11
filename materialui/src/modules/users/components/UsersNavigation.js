import { Button, Paper } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function UsersNavigation() {
  return (
    <Paper><Button to='' component={NavLink}>List</Button><Button  to='new' component={NavLink}>Add</Button></Paper>
  )
}

export default UsersNavigation