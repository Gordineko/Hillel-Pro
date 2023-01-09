import React from 'react'
import'./Navigation.css'
import NavigationLink from './NavigationLink'
function Navigation({page,navigate}) {
  return (
    <div className='row'>
    <NavigationLink path={'posts'} lable='Posts' curentPath={page} navigate={navigate} />
    <NavigationLink path={'users'} lable='Users' curentPath={page} navigate={navigate} />
    </div>
  )
}

export default Navigation