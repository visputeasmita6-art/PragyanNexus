import React, { createContext, useState, useEffect } from 'react'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([
    { title: 'Cyclone Warning', description: 'High wind speeds expected along coast.', severity: 'critical' },
    { title: 'Air Quality Advisory', description: 'AQI above 150 in industrial zones.', severity: 'advisory' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(prev => {
        const newAlert = { 
          title: 'Real-time update', 
          description: `Random alert ${Math.floor(Math.random()*100)}`, 
          severity: ['critical','warning','advisory'][Math.floor(Math.random()*3)] 
        }
        return [newAlert, ...prev.slice(0,2)]
      })
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return <AlertContext.Provider value={{ alerts }}>{children}</AlertContext.Provider>
}