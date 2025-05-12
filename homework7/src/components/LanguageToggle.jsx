import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const LanguageToggle = () => {
  const { toggleLanguage, language } = useContext(LanguageContext)

  const getButtonLabel = () => {
    switch (language) {
      case 'en':
        return 'Switch language';
      case 'ru':
        return 'Переключение языков';
      case 'de':
        return 'Sprache wechseln';
      default:
        return 'Change Language';
    }
  }

  return <button onClick={toggleLanguage}>{getButtonLabel()}</button>;
}

export default LanguageToggle