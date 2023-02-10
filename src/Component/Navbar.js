import React from 'react'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>

      <NavLink to='/login'>Login / Signup</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/dnd'>Generate Form</NavLink>
    </nav>
  )
}
