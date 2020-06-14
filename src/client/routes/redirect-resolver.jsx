import React from 'react'
import {useSelector} from 'react-redux'
import {useLocation, Redirect} from 'react-router-dom'
import {ROUTES} from './constants'

export const RedirectResolver = ({children}) => {
  const user = useSelector((state) => {
    return state.user
  })
  const {pathname} = useLocation()

  if (pathname === ROUTES.login.path && user) {
    return <Redirect to={ROUTES.account.path} />
  }

  if (
    Object.values(ROUTES).some(
      ({needAuth, path}) => path === pathname && needAuth
    ) &&
    !user
  ) {
    return <Redirect to={ROUTES.login.path} />
  }

  return children
}
