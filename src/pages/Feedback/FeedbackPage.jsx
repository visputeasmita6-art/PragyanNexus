import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import FeedbackSystem from '../../components/Feedback/FeedbackSystem'

const FeedbackPage = () => {
  const { t } = useLanguage()
  return (
    <div>
      <h2>{t('feedback')}</h2>
      <FeedbackSystem />
    </div>
  )
}

export default FeedbackPage