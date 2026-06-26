import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const AboutPage = () => {
  const { t } = useLanguage()
  return (
    <div>
      <h2>{t('about')}</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: 600, marginTop: 16 }}>Pragyan Nexus · Integrated AQI & HCHO monitoring portal inspired by ISRO's research. Real-time analytics, voice commands, multi-language, and disaster alerts.</p>
    </div>
  )
}

export default AboutPage