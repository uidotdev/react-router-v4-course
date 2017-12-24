import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='container navbar'>
      <Link to='/'>Home</Link>
      <nav className='nav-links'>
        <Link to='/players'>Players</Link>
        <Link to='/teams'>Teams</Link>
      </nav>
    </div>
  )
}