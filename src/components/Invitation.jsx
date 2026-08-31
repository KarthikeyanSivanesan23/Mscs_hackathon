import { useEffect } from 'react'

export default function Invitation() {
  useEffect(() => {
    const card = document.getElementById('invitationCard')
    if (!card) return
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
    }
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="invitation-section">
      <div className="wrap">
        <div className="invitation-label">Invitation</div>
        <div className="invitation-card" id="invitationCard">
          <img src="/inv.jpeg" alt="Invitation" className="invitation-img" />
        </div>
      </div>
    </section>
  )
}
