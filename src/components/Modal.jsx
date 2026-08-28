export default function Modal({ ps, onClose }) {
  if (!ps) return null

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">
        <div className="modal-top">
          <div>
            <div className="modal-meta">
              <span className="ps-id">{ps.id}</span>
              <span className={`tag ${ps.c === 'Software' ? 'sw' : 'hw'}`}>{ps.c}</span>
              <span className="tag theme">{ps.th}</span>
            </div>
            <h3>{ps.t}</h3>
            <div className="modal-org">{ps.o}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-desc">{ps.d}</div>
        {ps.dl && (
          <div className="modal-deadline">Official SIH portal deadline: {ps.dl}</div>
        )}
      </div>
    </div>
  )
}
