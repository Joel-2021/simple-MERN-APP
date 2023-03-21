import React from 'react'
import {AppBar, Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom'
const Header=styled(AppBar)`
background:#111111`
const Tabs=styled(NavLink)`
font-size:20px;
margin:20px;
text-decoration:none;
color:white`
const NavBar = () => {
  return (
   <Header position='static'>
    <Toolbar>
      <Tabs to='/' >All User</Tabs>
      <Tabs to='add'>Add User</Tabs>
        
    
    </Toolbar>
   </Header>
  )
}

export default NavBar