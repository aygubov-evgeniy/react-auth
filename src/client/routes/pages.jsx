import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ROUTES} from './constants'
import {RedirectResolver} from './redirect-resolver'

export const Pages = () => {
  return (
    <RedirectResolver>
      <Switch>
        {Object.values(ROUTES).map(({path, component: Component, exact}) => {
          return (
            <Route path={path} key={path} component={Component} exact={exact} />
          )
        })}
      </Switch>
    </RedirectResolver>
  )
}
