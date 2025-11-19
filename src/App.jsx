import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import SmartPerformance from './components/SmartPerformance'
import DeviceInfo from './components/DeviceInfo'
import Alerts from './components/Alerts'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/dashboard`)
        if (!res.ok) throw new Error('Failed to load dashboard')
        const json = await res.json()
        setData(json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-16 relative z-10">
        {loading ? (
          <div className="text-center text-slate-300 py-20">Loading dashboard...</div>
        ) : error ? (
          <div className="text-center text-rose-400 py-20">{error}</div>
        ) : (
          <div className="grid gap-6 md:gap-8">
            <SmartPerformance data={data.smart_performance} />
            <DeviceInfo data={data.device_info} />
            <Alerts data={data.alerts} />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
