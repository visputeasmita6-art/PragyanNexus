import React, { useContext } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { AlertContext } from '../../contexts/AlertContext'
import DisasterAlerts from '../../components/Alerts/DisasterAlerts'
import NotificationSettings from '../../components/Alerts/NotificationSettings'

const AlertsPage = () => {
  const { t } = useLanguage()
  const { alerts } = useContext(AlertContext)
  return (
    <div>
      <h2>{t('alerts')}</h2>
      <DisasterAlerts alerts={alerts} />
      <NotificationSettings />
    </div>
  )
}

export default AlertsPage