import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/slices/authSlice'

const UserProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserProfile

