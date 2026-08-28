import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'

export default function Admin() {
  const [registrations, setRegistrations] = useState([])
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (authenticated) {
      const data = JSON.parse(localStorage.getItem('registrations') || '[]')
      setRegistrations(data)
    }
  }, [authenticated])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'ideathon2026') {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  const handleDelete = (id) => {
    if (!confirm('Delete this registration?')) return
    const updated = registrations.filter((r) => r.id !== id)
    localStorage.setItem('registrations', JSON.stringify(updated))
    setRegistrations(updated)
  }

  const downloadExcel = () => {
    const data = registrations.map((r, i) => ({
      'S.No': i + 1,
      'Team Name': r.teamName,
      'Member 1': r.member1 || '',
      'Member 2': r.member2 || '',
      'Member 3': r.member3 || '',
      'Member 4': r.member4 || '',
      'Member 5': r.member5 || '',
      'Member 6': r.member6 || '',
      'Mobile 1': r.mobile1 || '',
      'Mobile 2': r.mobile2 || '',
      'Address': r.address || '',
      'Department': r.department,
      'Problem Statement ID': r.psId,
      'Problem Statement Title': r.psTitle,
      'Gmail': r.gmail,
      'Registered At': new Date(r.createdAt).toLocaleString(),
    }))

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Registrations')

    ws['!cols'] = [
      { wch: 6 },
      { wch: 25 },
      { wch: 25 },
      { wch: 15 },
      { wch: 50 },
      { wch: 30 },
      { wch: 20 },
    ]

    XLSX.writeFile(wb, `hackathon-ideathon-registrations.xlsx`)
  }

  if (!authenticated) {
    return (
      <div className="register-page">
        <div className="wrap">
          <div className="section-head">
            <div className="section-tag">Super Admin</div>
            <h2>Admin Login</h2>
            <p>Enter the admin password to view registrations.</p>
          </div>
          <form className="register-form" onSubmit={handleLogin} style={{ maxWidth: 400 }}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <span className="form-error">{error}</span>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Login
            </button>
            <p style={{ marginTop: 12, color: 'var(--muted)', fontSize: 13 }}>
              Default password: ideathon2026
            </p>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="register-page">
      <div className="wrap">
        <div className="admin-header">
          <div className="section-head">
            <div className="section-tag">Super Admin</div>
            <h2>Registrations ({registrations.length})</h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn btn-primary" onClick={downloadExcel}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Excel
            </button>
            <button className="btn btn-ghost" onClick={() => { setAuthenticated(false); setPassword('') }}>
              Logout
            </button>
          </div>
        </div>

        {registrations.length === 0 ? (
          <div className="empty-state">No registrations yet.</div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th>Department</th>
                  <th>PS ID</th>
                  <th>PS Title</th>
                  <th>Gmail</th>
                  <th>Date</th>
                  <th>Members</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((r, i) => (
                  <tr key={r.id}>
                    <td>{i + 1}</td>
                    <td>{r.teamName}</td>
                    <td>{r.department}</td>
                    <td><span className="ps-id">{r.psId}</span></td>
                    <td>{r.psTitle}</td>
                    <td>{r.gmail}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span className="members-count">6 members</span>
                    </td>
                    <td>
                      <button className="btn-delete" onClick={() => handleDelete(r.id)} title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
