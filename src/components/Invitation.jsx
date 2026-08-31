import { useEffect } from 'react'

export default function Invitation() {
  useEffect(() => {
    const card = document.getElementById('invitationCard')
    if (!card) return

    const handleMove = (clientX, clientY) => {
      const rect = card.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
    }

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY)
    const handleTouchMove = (e) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX, e.touches[0].clientY)
    }
    const handleEnd = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('touchmove', handleTouchMove, { passive: false })
    card.addEventListener('mouseleave', handleEnd)
    card.addEventListener('touchend', handleEnd)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('touchmove', handleTouchMove)
      card.removeEventListener('mouseleave', handleEnd)
      card.removeEventListener('touchend', handleEnd)
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
