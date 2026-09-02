import { useEffect, useState } from 'react'
import { saveRegistration } from '../lib/firebase'

export default function DataRecovery() {
  const [synced, setSynced] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('registrations')
    if (!raw) return

    try {
      const localData = JSON.parse(raw)
      if (!Array.isArray(localData) || localData.length === 0) return

      Promise.all(
        localData.map((reg) => {
          const { id, ...rest } = reg
          return saveRegistration(rest)
        })
      ).then(() => {
        localStorage.removeItem('registrations')
        setSynced(true)
      }).catch(() => {})
    } catch {}
  }, [])

  if (!synced) return null

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
      background: 'rgba(31,174,100,0.95)', color: '#fff',
      padding: '12px 20px', borderRadius: 12, fontSize: 13,
      fontFamily: "'Inter', sans-serif", fontWeight: 500,
      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
      animation: 'fadeInUp 0.3s ease',
    }}>
      Old registration data synced to server!
    </div>
  )
}
