import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const NotificationSettings = () => {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed:', { email, phone })
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <div style={{ background: 'var(--card-bg)', padding: 24, borderRadius: 'var(--radius-md)', maxWidth: 500, marginTop: 20 }}>
      <h3>Notification Settings</h3>
      {subscribed ? <p>✅ Subscribed successfully!</p> : (
        <form onSubmit={handleSubscribe}>
          <div style={{ marginBottom: 12 }}>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" style={{ width: '100%', background: '#0f2136', border: '1px solid var(--border-subtle)', color: '#fff', padding: 10, borderRadius: 8, marginTop: 4 }} required />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Phone</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone" style={{ width: '100%', background: '#0f2136', border: '1px solid var(--border-subtle)', color: '#fff', padding: 10, borderRadius: 8, marginTop: 4 }} required />
          </div>
          <button type="submit" style={{ background: 'var(--accent)', border: 'none', padding: '10px 20px', borderRadius: 30, fontWeight: 600, color: '#0b1a2e' }}>Subscribe to Alerts</button>
        </form>
      )}
    </div>
  )
}

export default NotificationSettings