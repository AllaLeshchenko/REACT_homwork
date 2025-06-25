import React from 'react'
import styles from '../styles/Main.module.css'
import Apple from '../assets/svg/Apple.svg'
import Google from '../assets/svg/Google.svg'
import X from '../assets/svg/X.svg'

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <p>Sing in <br/> with</p>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <img src={Apple} alt='apple' />
        </button>
        <button className={styles.button}>
          <img src={Google} alt='google' />
        </button>
        <button className={styles.button}>
          <img src={X} alt='x' />
        </button>
      </div>
      
    </div>
  )
}

export default Main


