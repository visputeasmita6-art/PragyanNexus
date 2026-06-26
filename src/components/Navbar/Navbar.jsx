import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { FaMicrophone, FaGlobe } from 'react-icons/fa'
import { voiceCommands } from '../../utils/voiceCommands'

const Navbar = () => {
  const { t, lang, setLang } = useLanguage()
  const navigate = useNavigate()
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase().trim()
      const action = voiceCommands(command)
      if (action) {
        if (typeof action === 'function') {
          action()
        } else {
          navigate(action)
        }
        setListening(false)
      } else {
        alert(`Command not recognized: "${command}"`)
        setListening(false)
      }
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)
    recognitionRef.current = recognition
  }, [navigate])

  const toggleListening = () => {
    if (listening) {
      recognitionRef.current?.stop()
      setListening(false)
      return
    }
    if (recognitionRef.current) {
      recognitionRef.current.start()
      setListening(true)
    } else {
      alert('Voice recognition not supported in this browser.')
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span>Pragyan</span> Nexus
      </div>
      <div className="nav-links">
        <Link to="/">{t('home')}</Link>
        <Link to="/dashboard">{t('dashboard')}</Link>
        <Link to="/alerts">{t('alerts')}</Link>
        <Link to="/feedback">{t('feedback')}</Link>
        <Link to="/about">{t('about')}</Link>
      </div>
      <div className="nav-actions">
        <button className={`mic-btn ${listening ? 'listening' : ''}`} onClick={toggleListening}>
          <FaMicrophone /> {listening ? '🎙️' : t('voice')}
        </button>
        <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>
          <FaGlobe /> {lang === 'en' ? 'EN' : 'हिं'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar