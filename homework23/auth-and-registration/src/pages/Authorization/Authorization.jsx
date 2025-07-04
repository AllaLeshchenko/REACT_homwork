import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/authSlice'

const Authorization = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isAuthenticated, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault() // ✅ исправлено
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user')
    }
  }, [isAuthenticated, navigate]) // ✅ добавлено navigate

  // return (
  //   <div>
  //     <h1>Authorization</h1>
  //     {error && <span>{error}</span>}
  //     <form onSubmit={onSubmit}>
  //       <input
  //         required
  //         onChange={(e) => setEmail(e.target.value)} // ✅ исправлено
  //         value={email}
  //         type="email"
  //         placeholder="Email"
  //       />
  //       <input
  //         required
  //         onChange={(e) => setPassword(e.target.value)} // ✅ исправлено
  //         value={password}
  //         type="password"
  //         placeholder="Password"
  //       />
  //       <button type="submit">Войти</button>
  //     </form>
  //   </div>
  // )
  return (
  <div className="form-container">
    <h1>Authorization</h1>
    {error && <span>{error}</span>}
    <form onSubmit={onSubmit}>
      <input
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Войти</button>
    </form>
  </div>
)

}

export default Authorization
