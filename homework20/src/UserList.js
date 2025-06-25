import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
  const users = useSelector((state) => state.users.list)

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList