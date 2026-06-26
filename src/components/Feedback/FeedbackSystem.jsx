import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const FeedbackSystem = () => {
  const { t } = useLanguage()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [category, setCategory] = useState('general')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ rating, comment, category })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setRating(0)
    setComment('')
    setCategory('general')
  }

  return (
    <div style={{ background: 'var(--card-bg)', padding: 24, borderRadius: 'var(--radius-md)', maxWidth: 500, marginTop: 20 }}>
      {submitted ? <p>✅ Thank you for your feedback!</p> : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>{t('rating')}</label>
            <div style={{ display: 'flex', gap: 8, fontSize: 28, marginTop: 4 }}>
              {[1,2,3,4,5].map(s => <span key={s} onClick={() => setRating(s)} style={{ cursor: 'pointer', color: s <= rating ? '#fbc02d' : '#444' }}>★</span>)}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', background: '#0f2136', border: '1px solid var(--border-subtle)', color: '#fff', padding: 10, borderRadius: 8, marginTop: 4 }}>
              <option value="general">General</option>
              <option value="data-accuracy">Data Accuracy</option>
              <option value="ui-ux">UI/UX</option>
              <option value="new-feature">New Feature</option>
            </select>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>{t('comment')}</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} style={{ width: '100%', background: '#0f2136', border: '1px solid var(--border-subtle)', color: '#fff', padding: 10, borderRadius: 8, marginTop: 4 }} rows={3} required />
          </div>
          <button type="submit" style={{ background: 'var(--accent)', border: 'none', padding: '10px 20px', borderRadius: 30, fontWeight: 600, color: '#0b1a2e' }}>{t('submit')}</button>
        </form>
      )}
    </div>
  )
}

export default FeedbackSystem