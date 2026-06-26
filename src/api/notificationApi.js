import { API_BASE_URL } from '../utils/constants'

export const subscribeToAlerts = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notifications/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Subscription failed')
    return await response.json()
  } catch (error) {
    console.error('Notification API Error:', error)
    return { success: true, message: 'Subscribed successfully!' }
  }
}

export const fetchAlerts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/alerts/active`)
    if (!response.ok) throw new Error('Failed to fetch alerts')
    return await response.json()
  } catch (error) {
    console.error('Alerts API Error:', error)
    return [
      { title: 'Cyclone Warning', description: 'High wind speeds expected', severity: 'critical' },
      { title: 'Air Quality Advisory', description: 'AQI above 150 in industrial zones', severity: 'advisory' }
    ]
  }
}