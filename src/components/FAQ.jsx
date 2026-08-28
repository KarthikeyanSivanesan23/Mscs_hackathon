import { useState } from 'react'

const faqData = [
  {
    q: 'Can two teams pick the same problem statement?',
    a: 'Yes, within our internal round. On the official SIH portal, PS selection is first‑come‑first‑served with a cap on ideas per statement, so decide early if you\'re heading to nationals.',
  },
  {
    q: 'Where do the problem statements come from?',
    a: 'Directly from the official Smart India Hackathon 2026 portal at sih.gov.in/sih2026PS — the same list every participating college across India works from.',
  },
  {
    q: 'Do I have to use PowerPoint?',
    a: 'Use whatever tool you like to build the slides — Google Slides, Canva, PowerPoint. What matters is the final export: exactly six slides, saved as a PDF.',
  },
  {
    q: 'What happens after the internal round?',
    a: 'Shortlisted teams get faculty mentoring to refine their idea before it\'s submitted on the official SIH portal under the college\'s name.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="section-head">
          <div className="section-tag">Good to know</div>
          <h2>Frequently asked questions</h2>
        </div>
        {faqData.map((item, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <div className="faq-q" onClick={() => toggle(i)}>
              <h4>{item.q}</h4>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
