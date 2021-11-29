import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navigation">
      <NavLink
        end
        to="/"
        className={({ isActive }) => '' + (isActive ? 'nav-active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        end
        to="/about"
        className={({ isActive }) => '' + (isActive ? 'nav-active' : '')}
      >
        About
      </NavLink>
    </div>
  )
}
