import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { PROBLEM_STATEMENTS } from '../data/ps-data'
import HolographicBeams from '../components/ui/beams-background'
import { saveRegistration, getRegistrations } from '../lib/firebase'

const EMAILJS_SERVICE_ID = 'service_c49w534'
const EMAILJS_TEMPLATE_ID = 'template_entzp8b'
const EMAILJS_PUBLIC_KEY = '986g31-THpSir3Aqb'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    teamName: '',
    member1: '', member2: '', member3: '', member4: '', member5: '', member6: '',
    mobile1: '',
    mobile2: '',
    address: '',
    department: '',
    psId: '',
    psTitle: '',
    gmail: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [emailStatus, setEmailStatus] = useState('')

  const departments = [
    'Computer Applications',
    'Computer Science',
    'Information Technology',
    'Electronics & Communication',
    'Electrical & Electronics',
    'Mechanical Engineering',
    'Civil Engineering',
    'Other',
  ]

  const validateGmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (name === 'gmail' && value && !validateGmail(value)) {
      setErrors((prev) => ({ ...prev, gmail: 'Please enter a valid Gmail address' }))
    } else if (name === 'gmail') {
      setErrors((prev) => ({ ...prev, gmail: '' }))
    }

    if (name === 'psId') {
      const ps = PROBLEM_STATEMENTS.find((p) => p.id === value)
      setForm((prev) => ({ ...prev, psId: value, psTitle: ps ? ps.t : '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.teamName.trim()) newErrors.teamName = 'Team name is required'
    for (let i = 1; i <= 6; i++) {
      if (!form[`member${i}`].trim()) newErrors[`member${i}`] = `Member ${i} name is required`
    }
    if (!form.mobile1.trim()) newErrors.mobile1 = 'Mobile number 1 is required'
    else if (!/^\d{10}$/.test(form.mobile1.trim())) newErrors.mobile1 = 'Enter a valid 10-digit number'
    if (!form.mobile2.trim()) newErrors.mobile2 = 'Mobile number 2 is required'
    else if (!/^\d{10}$/.test(form.mobile2.trim())) newErrors.mobile2 = 'Enter a valid 10-digit number'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    if (!form.department) newErrors.department = 'Department is required'
    if (!form.psId) newErrors.psId = 'Problem Statement ID is required'
    if (!form.gmail.trim()) newErrors.gmail = 'Gmail is required'
    else if (!validateGmail(form.gmail)) newErrors.gmail = 'Please enter a valid Gmail address'
    else {
      try {
        const snapshot = await getRegistrations()
        const data = snapshot.val()
        if (data) {
          const existing = Object.values(data)
          const emailExists = existing.some((r) => r.gmail && r.gmail.toLowerCase() === form.gmail.toLowerCase())
          if (emailExists) newErrors.gmail = 'This email is already registered'
        }
      } catch {
        const existing = JSON.parse(localStorage.getItem('registrations') || '[]')
        const emailExists = existing.some((r) => r.gmail.toLowerCase() === form.gmail.toLowerCase())
        if (emailExists) newErrors.gmail = 'This email is already registered'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const registrationData = {
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }

    try {
      await saveRegistration(registrationData)
    } catch {
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]')
      registrations.push(registrationData)
      localStorage.setItem('registrations', JSON.stringify(registrations))
    }

    setSending(true)
    setEmailStatus('')

    const templateParams = {
      user_name: form.teamName,
      team_name: form.teamName,
      project_title: form.psTitle,
      to_email: form.gmail,
      from_name: 'Internal Hackathon Organizing Team',
      reply_to: 'skarthikeyan-cs@mscartsandscience-edu.in',
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response)
        setEmailStatus('Confirmation Email sent successfully!')
        setSending(false)
        setSubmitted(true)
      })
      .catch((err) => {
        console.error('Failed to send email:', err)
        setEmailStatus('Email failed to send. Check console for details.')
        setSending(false)
        setSubmitted(true)
      })
  }

  if (submitted) {
    return (
      <div className="register-page">
        <HolographicBeams density={15} speed={1.5} aberration={3} opacity={90} />
        <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
          <div className="register-success">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Your team <strong>{form.teamName}</strong> has been registered for the Internal Mohamed Sathak College Of Arts &amp; Science Hackathon.</p>
            {emailStatus && (
              <div style={{
                padding: '12px 16px', borderRadius: 10, marginBottom: 20, fontSize: 13,
                background: emailStatus.includes('successfully') ? 'var(--green-soft)' : 'rgba(255,95,87,0.14)',
                border: `1px solid ${emailStatus.includes('successfully') ? 'var(--green)' : '#FF5F57'}`,
                color: emailStatus.includes('successfully') ? 'var(--green)' : '#FF5F57',
              }}>
                {emailStatus}
              </div>
            )}
            <div className="success-details">
              <div><strong>Problem Statement:</strong> {form.psId}</div>
              <div><strong>Department:</strong> {form.department}</div>
              <div><strong>Gmail:</strong> {form.gmail}</div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="register-page">
      <HolographicBeams density={15} speed={1.5} aberration={3} opacity={90} />
      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-head" style={{ textAlign: 'center', maxWidth: '100%' }}>
          <div className="section-tag">Team Registration</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>Register for Hackthon 2026</h2>
          <p>Fill in your team details below. All fields are required.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name <span style={{ color: '#ff5050' }}>*</span></label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Enter your team name"
              value={form.teamName}
              onChange={handleChange}
            />
            <span className="form-hint">A Team of Six members should consist of One Team Lead, max 5 Boys, One Girl must compulsory be included in the Team.</span>
            {errors.teamName && <span className="form-error">{errors.teamName}</span>}
          </div>

          <div className="team-members-section">
            <h3 className="team-members-title">Team Members</h3>
            <div className="members-grid">
              {[1,2,3,4,5,6].map((i) => (
                <div className="form-group" key={i}>
                  <label htmlFor={`member${i}`}>
                    Member {i} {i === 1 && <span className="member-badge-inline">Team Lead</span>}
                  </label>
                  <input
                    type="text"
                    id={`member${i}`}
                    name={`member${i}`}
                    placeholder={`Member ${i} name`}
                    value={form[`member${i}`]}
                    onChange={handleChange}
                  />
                  {errors[`member${i}`] && <span className="form-error">{errors[`member${i}`]}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobile1">Mobile Number 1 <span style={{ color: '#ff5050' }}>*</span></label>
            <input
              type="tel"
              id="mobile1"
              name="mobile1"
              placeholder="10-digit number"
              value={form.mobile1}
              onChange={handleChange}
            />
            {errors.mobile1 && <span className="form-error">{errors.mobile1}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile2">Mobile Number 2 <span style={{ color: '#ff5050' }}>*</span></label>
            <input
              type="tel"
              id="mobile2"
              name="mobile2"
              placeholder="10-digit number"
              value={form.mobile2}
              onChange={handleChange}
            />
            {errors.mobile2 && <span className="form-error">{errors.mobile2}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address <span style={{ color: '#ff5050' }}>*</span></label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter team address"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <span className="form-error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="department">Department <span style={{ color: '#ff5050' }}>*</span></label>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="Enter your department"
              value={form.department}
              onChange={handleChange}
            />
            {errors.department && <span className="form-error">{errors.department}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="psId">Problem Statement ID</label>
            <select
              id="psId"
              name="psId"
              value={form.psId}
              onChange={handleChange}
            >
              <option value="">Select a problem statement</option>
              {PROBLEM_STATEMENTS.map((ps) => (
                <option key={ps.id} value={ps.id}>
                  {ps.id} — {ps.t.substring(0, 60)}{ps.t.length > 60 ? '...' : ''}
                </option>
              ))}
            </select>
            {errors.psId && <span className="form-error">{errors.psId}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="psTitle">Problem Statement Title</label>
            <input
              type="text"
              id="psTitle"
              name="psTitle"
              value={form.psTitle}
              readOnly
              placeholder="Auto-filled from PS ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gmail">Gmail Address</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              placeholder="yourname@gmail.com"
              value={form.gmail}
              onChange={handleChange}
            />
            {errors.gmail && <span className="form-error">{errors.gmail}</span>}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
            {sending ? 'Sending...' : 'Register Team'}
          </button>

          <div className="form-footer">
            Already registered? <Link to="/">Go back home</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
