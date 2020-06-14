import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import {Routes} from './routes'
import './main.css'

export const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
