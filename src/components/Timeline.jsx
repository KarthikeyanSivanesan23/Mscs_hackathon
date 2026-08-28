export default function Timeline() {
  return (
    <section id="timeline">
      <div className="wrap about-grid">
        <div className="about-copy">
          <div className="section-tag">How the internal round works</div>
          <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', margin: '0 0 18px', fontWeight: 700 }}>
            One campus round, then the real thing
          </h2>
          <p>
            Every team registers with a <strong>Team ID</strong> and picks{' '}
            <strong>one problem statement</strong> from the official SIH 2026 list below. You
            build your idea exactly as the national portal expects it — a six‑slide deck.
          </p>
          <p>
            Our internal panel shortlists ideas on originality, technical feasibility and
            clarity of explanation — the same lens SIH evaluators use — so the teams we send
            forward are genuinely ready.
          </p>
          <p>
            Use the console on the right to search, filter by track or theme, and open any
            problem statement for its full brief.
          </p>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-stage">Stage 01</div>
            <h4>Team registration</h4>
            <p>Form a team, register on the internal portal, receive your Team ID.</p>
          </div>
          <div className="tl-item">
            <div className="tl-stage">Stage 02</div>
            <h4>Problem statement selection</h4>
            <p>
              Choose one PS from the 226 official SIH 2026 statements — Software or
              Hardware.
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-stage">Stage 03</div>
            <h4>Idea PPT submission</h4>
            <p>
              Build your idea in the mandated 6‑slide format, export as PDF, and upload.
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-stage">Stage 04</div>
            <h4>Internal jury round</h4>
            <p>
              Faculty panel reviews every submission and shortlists teams to represent the
              college.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
