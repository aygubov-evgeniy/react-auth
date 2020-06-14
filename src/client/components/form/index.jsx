import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../../store/actions'

export const Form = () => {
  const [login, setLogin] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({login}),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }

        if (response.status === 403) {
          throw new Error('Incorrect login')
        }

        throw new Error('Something went wrong')
      })
      .then((result) => dispatch(addUser(result)))
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })
  }

  const handleChange = (e) => {
    if (/^[a-zA-Z0-9]*$/g.test(e.target.value)) {
      setError(null)
    } else {
      setError('Not valid login, please use next pattern [a-zA-Z0-9]')
    }

    setLogin(e.target.value)
  }

  const shouldBeDisabled = Boolean(error) || loading

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        required
        value={login}
        onChange={(e) => handleChange(e)}
        placeholder="Enter your login"
      />
      <p>Login for test - admin</p>

      <button type="submit" disabled={shouldBeDisabled}>
        Submit
      </button>

      {error && <div role="alert">{error}</div>}
    </form>
  )
}
