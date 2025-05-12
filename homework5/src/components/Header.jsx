import React from 'react'
import styles from '../styles/Header.module.css'
import Logo from '../assets/svg/LOGO.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={Logo} alt="#" />
    </div>
  )
}

export default Header