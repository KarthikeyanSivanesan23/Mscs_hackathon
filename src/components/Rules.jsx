import SchemaCard from './ui/schema-card'
import WaveBackground from './ui/wave-background'

export default function Rules() {
  return (
    <section id="rules">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Submission format</div>
          <h2>Rules for the Idea Submission PPT</h2>
          <p>
            The internal round uses the exact SIH 2026 idea‑presentation format. Follow this
            precisely — deviating from the template is the single most common reason
            submissions get rejected.
          </p>
        </div>

        <div className="rules-wrap">
          <div className="rule-card">
            <div className="rule-num">1</div>
            <div>
              <h4>Team Composition</h4>
              <p>A Team of Six members should consist of One Team Lead, max 5 Boys, One Girl must compulsory be included in the Team.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">2</div>
            <div>
              <h4>Six slides, maximum</h4>
              <p>Including the title slide. No exceptions — extra slides are simply not evaluated.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">3</div>
            <div>
              <h4>Points, not paragraphs</h4>
              <p>Use bullet points, diagrams, infographics and pictures over dense prose.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">4</div>
            <div>
              <h4>Precise and clear</h4>
              <p>Keep every explanation easy to understand at a glance — judges skim first, read second.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">5</div>
            <div>
              <h4>Unique and novel</h4>
              <p>The idea itself must be original — not a rebrand of an existing product or paper.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">6</div>
            <div>
              <h4>Use the provided template only</h4>
              <p>Don't change the idea‑detail pointers already defined for each slide in the format.</p>
            </div>
          </div>
          <div className="rule-card">
            <div className="rule-num">7</div>
            <div>
              <h4>Submit as PPT — nothing else</h4>
              <p>Save your final file as PPT before uploading. PDF, Word, or any other format will not be accepted.</p>
            </div>
          </div>
        </div>

        <div className="format-strip">
          <div className="format-strip-head">
            <h4>The 6‑slide structure</h4>
            <span>Slide 1 is your title page — delete the instructions slide before you submit</span>
          </div>
          <div className="slide-row">
            <div className="slide-cell">
              <span className="sn">01</span>
              <span className="st">Title Page</span>
              PS ID, title, theme, category, team ID &amp; name
            </div>
            <div className="slide-cell">
              <span className="sn">02</span>
              <span className="st">Idea Title</span>
              Proposed solution &amp; what makes it unique
            </div>
            <div className="slide-cell">
              <span className="sn">03</span>
              <span className="st">Technical Approach</span>
              Tech stack &amp; implementation methodology
            </div>
            <div className="slide-cell">
              <span className="sn">04</span>
              <span className="st">Feasibility &amp; Viability</span>
              Analysis, risks &amp; mitigation strategies
            </div>
            <div className="slide-cell">
              <span className="sn">05</span>
              <span className="st">Impact &amp; Benefits</span>
              Who it helps, and how
            </div>
            <div className="slide-cell">
              <span className="sn">06</span>
              <span className="st">Research &amp; References</span>
              Links and sources behind the idea
            </div>
          </div>
        </div>

        <div className="download-panel" style={{ marginTop: 36 }}>
          <div className="dp-left">
            <h3>Get format PPT</h3>
            <p>
              The complete submission checklist and 6‑slide breakdown above, in one printable
              page you can share with your team.
            </p>
          </div>
          <a className="btn btn-primary" href="/SIH2026-IDEA-Presentation-Format (1).pptx" download>
            <svg className="dl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PPT
          </a>
        </div>

        <div style={{ marginTop: 60 }}>
          <div className="section-head">
            <div className="section-tag">Leadership</div>
            <h2>Our Guiding Force</h2>
            <p>The pillars behind the Internal Hackathon initiative at Mohamed Sathak College of Arts &amp; Science.</p>
          </div>
          <div className="leadership-section">
            <WaveBackground />
            <div className="leadership-grid">
              <SchemaCard
                image="/principal.jpg"
                title="Principal"
                subtitle="Mohamed Sathak College of Arts &amp; Science"
                role="Principal"
                accentColor="#1FAE64"
              />
              <SchemaCard
                image="/vp.jpg"
                title="Vice Principal"
                subtitle="Mohamed Sathak College of Arts &amp; Science"
                role="Vice Principal"
                accentColor="#FF7A29"
              />
              <SchemaCard
                image="/Prabhu.jpg"
                title="Dr. M. Prabhu"
                subtitle="Dean, PG Department of Computer Applications"
                role="Dean"
                accentColor="#FFC145"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
