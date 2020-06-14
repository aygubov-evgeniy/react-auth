import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Pages} from './pages'
import {Header} from './header'

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  )
}
