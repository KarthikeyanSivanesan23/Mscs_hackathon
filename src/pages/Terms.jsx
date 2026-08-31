import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="register-page">
      <div className="wrap" style={{ position: 'relative', zIndex: 10, maxWidth: 800 }}>
        <div className="section-head">
          <div className="section-tag">Legal</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>Terms and Conditions</h2>
        </div>

        <div className="terms-content">
          <h3>1. Eligibility</h3>
          <p>The Internal Hackathon is open only to students of Mohamed Sathak College of Arts &amp; Science. Participants must be currently enrolled and studying at the college during the academic year 2025–2026.</p>

          <h3>2. Team Composition</h3>
          <p>Each team must consist of exactly six members. A team must include one team leader, a maximum of five boys, and at least one girl. Teams that do not meet this criteria will be disqualified.</p>

          <h3>3. Registration</h3>
          <p>Registration is mandatory through the official portal. Each team member's details including name, mobile number, and address must be provided. One Gmail address per team is required for communication.</p>

          <h3>4. Problem Statements</h3>
          <p>Teams must select one problem statement from the official SIH 2026 list. Problem statements are sourced from sih.gov.in/sih2026PS and subject to change at the national level.</p>

          <h3>5. Submission Format</h3>
          <p>Submissions must follow the mandated 6-slide PPT format. Teams must submit their final file as a PPT. No other format (PDF, Word, etc.) will be accepted.</p>

          <h3>6. Originality</h3>
          <p>All ideas submitted must be original work of the team. Plagiarism or rebranding of existing solutions will lead to immediate disqualification.</p>

          <h3>7. Judging Criteria</h3>
          <p>Entries will be evaluated on originality, technical feasibility, clarity of explanation, and alignment with the problem statement. The internal panel's decision is final.</p>

          <h3>8. Intellectual Property</h3>
          <p>All intellectual property rights for the ideas remain with the respective teams. The college claims no ownership over the submitted ideas or prototypes.</p>

          <h3>9. Code of Conduct</h3>
          <p>Participants must maintain professional conduct throughout the hackathon. Any form of misconduct, harassment, or unethical behavior will result in disqualification.</p>

          <h3>10. Amendments</h3>
          <p>The organizing committee reserves the right to amend these terms at any time. Participants will be notified of any changes through official communication channels.</p>
        </div>

        <div style={{ marginTop: 30 }}>
          <Link to="/" className="btn btn-ghost">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
