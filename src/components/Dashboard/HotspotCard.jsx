import React from 'react'

const HotspotCard = ({ title, value, status }) => {
  return (
    <div style={{ background: 'var(--card-bg)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{title}</h4>
      <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{value}</p>
      <span style={{ color: status === 'Good' ? '#4caf50' : status === 'Moderate' ? '#ff9800' : '#f44336', fontSize: '0.85rem' }}>{status}</span>
    </div>
  )
}

export default HotspotCard