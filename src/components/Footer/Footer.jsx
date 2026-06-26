import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <p>© 2026 Pragyan Nexus · {t('footer')}</p>
    </footer>
  )
}

export default Footer