import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

//объект translations — словарь всех фраз на разных языках
const translations = {
  en: {
    greeting: 'Hello my world! How are you?',
  },
  ru: {
    greeting: 'Привет мой мир! Как дала?',
  },
  de: {
    greeting: 'Hallo meine Welt! Wie geht es dir?',
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  //функция toggleLanguage() — для переключения между языками
  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      if (prevLang === 'en') return 'ru'
      if (prevLang === 'ru') return 'de'
      return 'en'
    })
  }
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}
//LanguageProvider - Этот компонент оборачивает всё приложение в <LanguageContext.Provider>, 
// чтобы все дочерние компоненты могли "подписаться" на язык