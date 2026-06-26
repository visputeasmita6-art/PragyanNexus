import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Heroes = () => {
  const { t } = useLanguage()
  return (
    <div style={{ padding: '2rem 0' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, background: 'linear-gradient(135deg, #4fc3f7, #81d4fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {t('hero_title')}
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: 600, marginTop: 12 }}>{t('hero_sub')}</p>
    </div>
  )
}

export default Heroes