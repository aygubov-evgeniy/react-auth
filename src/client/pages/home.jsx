import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addFilms} from '../store/actions'

export const Home = () => {
  const dispatch = useDispatch()
  const films = useSelector((state) => {
    return state.films
  })

  useEffect(() => {
    if (films) return

    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=002430aa6dc936d83ef8e29017602abb'
    )
      .then((response) => {
        return response.json()
      })
      .then((response) => dispatch(addFilms(response.results)))
  }, [films, dispatch])

  return (
    <div className="films">
      <h1>Top 20 films</h1>

      <ul>
        {films
          ? films.map(({id, title}) => {
              return <li key={id}>{title}</li>
            })
          : 'Loading...'}
      </ul>
    </div>
  )
}
