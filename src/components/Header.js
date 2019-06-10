import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <NavLink to={'/'} className="links">
            Home
          </NavLink>
          <h1>BrewLo</h1>
          <NavLink to={'/add-employee'} className="links">
            Add Employee
          </NavLink>
        </nav>
      </div>
    )
  }
}

export default Header
