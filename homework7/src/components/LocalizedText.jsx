import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const LocalizedText = () => {
  const { language, translations } = useContext(LanguageContext);

  return <h1>{translations[language].greeting}</h1>;
};

export default LocalizedText