import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeclassName={(navData) => navData.isActive ? "active" : "" }>
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
    </div>
  )
}
