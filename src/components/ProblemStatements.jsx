import { useState, useMemo } from 'react'
import { PROBLEM_STATEMENTS } from '../data/ps-data'

export default function ProblemStatements({ onOpenModal }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [theme, setTheme] = useState('')

  const themes = useMemo(() => {
    return [...new Set(PROBLEM_STATEMENTS.map((p) => p.th))].sort()
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PROBLEM_STATEMENTS.filter((p) => {
      if (category && p.c !== category) return false
      if (theme && p.th !== theme) return false
      if (q) {
        const hay = (p.id + ' ' + p.t + ' ' + p.o + ' ' + p.th).toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [search, category, theme])

  return (
    <section id="problems">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Live from sih.gov.in/sih2026PS</div>
          <h2>Find your problem statement</h2>
          <p>
            All 226 official Smart India Hackathon 2026 problem statements — search by
            keyword, or filter by track and theme.
          </p>
        </div>

        <div className="console">
          <div className="console-bar">
            <span className="cdot"></span>
            <span className="cdot"></span>
            <span className="cdot"></span>
            <span className="ctitle">ps-browser — sih2026PS.list</span>
          </div>
          <div className="controls">
            <div className="search-box">
              <span style={{ color: 'var(--muted)' }}>&gt;</span>
              <input
                type="text"
                placeholder="Search title, org, PS number…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="caret"></span>
            </div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All tracks</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
            </select>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="">All themes</option>
              {themes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="count-line">
            Showing <span>{filtered.length}</span> of 226 problem statements
          </div>
          <div className="ps-list">
            {filtered.length === 0 ? (
              <div className="empty-state">
                No problem statements match that search. Try a different keyword or clear
                the filters.
              </div>
            ) : (
              filtered.map((p) => (
                <div key={p.id} className="ps-card" onClick={() => onOpenModal(p)}>
                  <div className="ps-top">
                    <span className="ps-id">{p.id}</span>
                    <span className={`tag ${p.c === 'Software' ? 'sw' : 'hw'}`}>
                      {p.c}
                    </span>
                    <span className="tag theme">{p.th}</span>
                  </div>
                  <div className="ps-title">{p.t}</div>
                  <div className="ps-org">{p.o}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
