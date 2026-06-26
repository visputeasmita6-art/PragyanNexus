import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const { i18n, t: translate } = useTranslation()
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('pragyan-lang') || 'en'
  })

  useEffect(() => {
    i18n.changeLanguage(lang)
    localStorage.setItem('pragyan-lang', lang)
  }, [lang, i18n])

  const t = (key) => translate(key)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}