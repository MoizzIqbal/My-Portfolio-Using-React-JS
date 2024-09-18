import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/aboutus">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/services">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold" to="/contactus">Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
