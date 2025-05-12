import React from 'react'
import styles from '../styles/App.module.css'
import { LanguageProvider } from './LanguageContext'
import LanguageToggle from './LanguageToggle'
import LocalizedText from './LocalizedText'


function App() {
  return (
    <LanguageProvider>
      <div className={styles.App}>
        <div className={styles.languageContainer}>
          <LocalizedText />
          <LanguageToggle />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
