export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

export const getAQIStatus = (value) => {
  if (value <= 50) return { label: 'Good', color: '#4caf50' }
  if (value <= 100) return { label: 'Moderate', color: '#ff9800' }
  if (value <= 150) return { label: 'Unhealthy', color: '#f44336' }
  if (value <= 200) return { label: 'Very Unhealthy', color: '#9c27b0' }
  return { label: 'Hazardous', color: '#d32f2f' }
}