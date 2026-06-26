import { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AlertProvider } from './contexts/AlertContext'
import Layout from './components/Layout/Layout'
import Loader from './components/Loader/Loader'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import './styles/App.css'
import './styles/responsive.css'
import './styles/components.css'
import './i18n'

const Home = lazy(() => import('./pages/Home/Home'))
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'))
const AlertsPage = lazy(() => import('./pages/Alerts/AlertsPage'))
const FeedbackPage = lazy(() => import('./pages/Feedback/FeedbackPage'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <AlertProvider>
        <Router>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </AlertProvider>
    </LanguageProvider>
  )
}

export default App