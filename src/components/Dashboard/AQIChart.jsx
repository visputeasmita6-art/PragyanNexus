import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const AQIChart = ({ data }) => {
  if (!data || data.length === 0) return <p style={{ color: 'var(--text-muted)' }}>Loading data...</p>
  const chartData = {
    labels: data.map(d => d.time),
    datasets: [
      {
        label: 'AQI',
        data: data.map(d => d.value),
        borderColor: '#4fc3f7',
        backgroundColor: 'rgba(79, 195, 247, 0.1)',
        tension: 0.3,
        fill: true,
        pointRadius: 2,
      }
    ]
  }
  return <Line data={chartData} options={{ responsive: true, plugins: { legend: { labels: { color: '#b0c4de' } } }, scales: { x: { ticks: { color: '#b0c4de' } }, y: { ticks: { color: '#b0c4de' } } } }} />
}

export default AQIChart