import {ADD_FILMS, ADD_USER} from './action-names'

export const addFilms = (films) => {
  return {
    type: ADD_FILMS,
    payload: films,
  }
}

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  }
}
