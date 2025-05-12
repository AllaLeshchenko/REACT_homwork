import React from 'react'
import styles from '../styles/Main.module.css'

import { ReactComponent as Apple } from '../assets/svg/Apple.svg';
import { ReactComponent as Google } from '../assets/svg/Google.svg';
import { ReactComponent as X } from '../assets/svg/X.svg';

// import Apple from '../assets/svg/Apple.svg'
// import Google from '../assets/svg/Google.svg'
// import X from '../assets/svg/X.svg'

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.mainText}>
            <h1>LIFE IS WASTED ON THE LIVING</h1>
            <p>Sign in <br/> with</p>
        </div>
        <div className={styles.mainLogos}>
           <Apple className={styles.logo} />
           <Google className={styles.logo} />
           <X className={styles.logo} />
        </div>
            
    </div>
  )
}

export default Main


