import React from 'react'

const severityColor = {
  critical: '#d32f2f',
  warning: '#f57c00',
  advisory: '#fbc02d'
}

const DisasterAlerts = ({ alerts = [] }) => {
  if (!alerts.length) return <p style={{ color: 'var(--text-muted)' }}>No active alerts.</p>
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
      {alerts.map((alert, idx) => (
        <div key={idx} style={{ background: 'var(--card-bg)', borderLeft: `6px solid ${severityColor[alert.severity] || '#888'}`, padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{alert.title}</strong>
            <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600, color: severityColor[alert.severity] }}>{alert.severity}</span>
          </div>
          <p style={{ marginTop: 4, color: 'var(--text-muted)' }}>{alert.description}</p>
        </div>
      ))}
    </div>
  )
}

export default DisasterAlerts