import React from 'react'

function NavigationLink({path,navigate,lable,curentPath}) {
  return (
    <div className={'one clumn' + (curentPath==='posts' ?' active':'')} onClick={()=>navigate(path)}><h1>{lable}</h1></div>
  )
}

export default NavigationLink