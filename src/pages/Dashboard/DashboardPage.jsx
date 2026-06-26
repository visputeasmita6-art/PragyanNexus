import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import AQIChart from '../../components/Dashboard/AQIChart'
import HotspotMap from '../../components/Dashboard/HotspotMap'

const DashboardPage = () => {
  const { t } = useLanguage()
  const [aqiData, setAqiData] = useState([])

  useEffect(() => {
    const base = 35 + Math.random() * 30
    const history = Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      value: Math.floor(base + Math.sin(i / 4) * 12 + Math.random() * 8)
    }))
    setAqiData(history)
  }, [])

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>{t('dashboard')}</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>{t('aqi_trend')}</h3>
          <AQIChart data={aqiData} />
        </div>
        <div className="card">
          <h3>{t('hotspots')}</h3>
          <HotspotMap />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage