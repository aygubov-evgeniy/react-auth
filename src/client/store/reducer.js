import {ADD_FILMS, ADD_USER} from './action-names'

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
    case ADD_FILMS:
      return {
        ...state,
        films: action.payload,
      }
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      }
  }
}
