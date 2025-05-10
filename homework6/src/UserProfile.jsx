import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './UserProfile.module.css'


const UserProfile = () => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

// Создадим асинхронную функцию fetchUser, которая будет загружать данные
//  пользователя через API и обновлять состояние user.
const fetchUser = async () => {
    setLoading(true);
    try {
        const response = await axios.get('https://randomuser.me/api')
        setUser(response.data.results[0])
    }catch (error) {
        console.error('Ошибка при загрузке пользователя:', error)
    }finally {
        setLoading(false)
    }
}
useEffect(() => {
    fetchUser()
}, [])

if (loading) {
    return <div className={styles.loading}>Loading...</div>
}

  return (
    <div className={styles.profileContainer}>
    <img src={user.picture.large} alt="User" className={styles.avatar} />
    <h3>{`${user.name.first} ${user.name.last}`}</h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Location: {user.location.country}</p>
    <button onClick={fetchUser} className={styles.button}>
      Load New User
    </button>
  </div>
  )
}

export default UserProfile