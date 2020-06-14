import {createStore, compose} from 'redux'
import {reducer} from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const defaultStore = {user: null, films: null}

export const store = createStore(reducer, defaultStore, composeEnhancers())
