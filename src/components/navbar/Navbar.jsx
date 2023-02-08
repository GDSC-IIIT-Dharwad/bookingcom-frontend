import NavbarTopItems from './NavbarTopItems'
import NavbarBottomItems from './NavbarBottomItems'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <Link exact to="/">
          <div className="heading">bOOking.com</div>
        </Link>
        <div className="items">
          <NavbarTopItems />
        </div>
      </div>
      <div className="navbar-bottom">
        <NavbarBottomItems />
      </div>
    </div>
  )
}

export default Navbar
