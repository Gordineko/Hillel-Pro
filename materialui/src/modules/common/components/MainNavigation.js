import React from 'react'
import { AppBar, Toolbar, Typography,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
function MainNavigation() {
  return <AppBar position="static">
    <Toolbar>
      <Typography variant='h6' sx={{flexGrow:1}} to='/' component={NavLink}>
        My App
        </Typography>  
        <Button color="inherit" to='users' component={NavLink}>Users</Button>
    </Toolbar>
  </AppBar>
}

export default MainNavigation