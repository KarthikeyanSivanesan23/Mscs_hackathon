import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="fbrand">Mohamed Sathak College of Arts &amp; Science</div>
        <div className="fnote">
          Internal Hackthon tool for Smart India Hackathon 2026 selection.
          Problem‑statement data sourced from the official SIH portal
          (sih.gov.in/sih2026PS); always confirm final details there before
          national submission.
        </div>
        <div className="footer-links">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <span className="footer-dot">·</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-credit">
          Created by <strong>Karthikeyan</strong> — Programmer, School of Computer Science
        </div>
      </div>
    </footer>
  )
}
