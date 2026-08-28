import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src="/logo.png" alt="Logo" className="brand-logo" />
          <div className="brand-text">
            <div className="name">Mohamed Sathak College of Arts &amp; Science</div>
            <div className="sub">Internal Hackthon — Road to SIH 2026</div>
          </div>
        </div>
        <nav className={`links ${menuOpen ? 'open' : ''}`}>
          <a href="/#problems" onClick={() => setMenuOpen(false)}>Problem Statements</a>
          <a href="/#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
          <a href="/#rules" onClick={() => setMenuOpen(false)}>Rules</a>
          <a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <div className="mobile-ctas">
            <a className="nav-cta" href="/#rules" onClick={() => setMenuOpen(false)}>Get the format PPT</a>
            <Link className="nav-cta nav-register" to="/register" onClick={() => setMenuOpen(false)}>Register Now</Link>
          </div>
        </nav>
        <div className="nav-right">
          <div className="desktop-ctas">
            <a className="nav-cta" href="/#rules">Get the format PPT</a>
            <Link className="nav-cta nav-register" to="/register">Register Now</Link>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
