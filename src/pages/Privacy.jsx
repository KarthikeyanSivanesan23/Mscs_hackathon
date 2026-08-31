import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="register-page">
      <div className="wrap" style={{ position: 'relative', zIndex: 10, maxWidth: 800 }}>
        <div className="section-head">
          <div className="section-tag">Legal</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>Privacy Policy</h2>
        </div>

        <div className="terms-content">
          <h3>1. Information We Collect</h3>
          <p>We collect personal information that you provide during registration, including your name, team name, department, Gmail address, mobile number, and residential address.</p>

          <h3>2. How We Use Your Information</h3>
          <p>Your information is used solely for the purpose of organizing and managing the Internal Hackathon. We use your Gmail address to send registration confirmations and event-related communications.</p>

          <h3>3. Data Storage</h3>
          <p>Registration data is stored locally in your browser's localStorage. This data does not leave your device unless you access the admin panel, which is protected by authentication.</p>

          <h3>4. Email Communication</h3>
          <p>We use EmailJS to send confirmation emails. Your Gmail address is used only for sending the registration confirmation and will not be used for any other purpose.</p>

          <h3>5. Data Sharing</h3>
          <p>We do not sell, trade, or share your personal information with any third parties. Your data is used exclusively for hackathon management purposes.</p>

          <h3>6. Data Retention</h3>
          <p>Registration data is retained for the duration of the hackathon event cycle. Data may be deleted after the conclusion of SIH 2026 selection process.</p>

          <h3>7. Security</h3>
          <p>We implement reasonable security measures to protect your personal information. However, no method of electronic storage is 100% secure.</p>

          <h3>8. Your Rights</h3>
          <p>You may request deletion of your registration data at any time by contacting the organizing team. Upon deletion, your data will be removed from our records.</p>

          <h3>9. Changes to This Policy</h3>
          <p>We may update this privacy policy from time to time. Any changes will be communicated through official channels.</p>

          <h3>10. Contact</h3>
          <p>For any questions about this privacy policy, please contact the Internal Hackathon organizing team at Mohamed Sathak College of Arts &amp; Science.</p>
        </div>

        <div style={{ marginTop: 30 }}>
          <Link to="/" className="btn btn-ghost">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
