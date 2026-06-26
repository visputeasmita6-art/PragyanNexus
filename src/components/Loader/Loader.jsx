import React from 'react'

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <div style={{ border: '4px solid var(--border-subtle)', borderTopColor: 'var(--accent)', borderRadius: '50%', width: 48, height: 48, animation: 'spin 1s linear infinite' }} />
    <style>{'@keyframes spin { to { transform: rotate(360deg); } }'}</style>
  </div>
)

export default Loader