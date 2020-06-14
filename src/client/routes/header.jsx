import React from 'react'
import {NavLink} from 'react-router-dom'
import {ROUTES} from './constants'

export const Header = () => {
  return (
    <nav className="nav">
      <ul>
        {Object.values(ROUTES).map(({path, title}) => {
          return (
            <li key={path}>
              <NavLink exact to={path} activeClassName="selected">
                {title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
