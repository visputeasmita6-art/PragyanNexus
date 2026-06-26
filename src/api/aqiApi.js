import { API_BASE_URL } from '../utils/constants'

export const fetchAQIData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/aqi/current`)
    if (!response.ok) throw new Error('Failed to fetch AQI data')
    return await response.json()
  } catch (error) {
    console.error('AQI API Error:', error)
    return {
      aqi: 42,
      hcho: 0.08,
      temperature: 26,
      humidity: 54,
      timestamp: new Date().toISOString()
    }
  }
}

export const fetchAQIHistory = async (hours = 24) => {
  try {
    const response = await fetch(`${API_BASE_URL}/aqi/history?hours=${hours}`)
    if (!response.ok) throw new Error('Failed to fetch history')
    return await response.json()
  } catch (error) {
    console.error('History API Error:', error)
    const base = 35 + Math.random() * 30
    return Array.from({ length: hours }, (_, i) => ({
      time: `${i}:00`,
      value: Math.floor(base + Math.sin(i / 4) * 12 + Math.random() * 8)
    }))
  }
}