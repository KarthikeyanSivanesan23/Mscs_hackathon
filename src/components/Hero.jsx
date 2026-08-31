import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SplineScene } from './SplineScene'
import HolographicBeams from './ui/beams-background'

function Countdown({ targetDate, label, date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-item">
      <div className="countdown-label">{label}</div>
      <div className="countdown-date">{date}</div>
      <div className="countdown-blocks">
        <div className="countdown-block">
          <span className="countdown-num">{timeLeft.days}</span>
          <span className="countdown-unit">Days</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-block">
          <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-unit">Hrs</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-block">
          <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-unit">Min</span>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-block">
          <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-unit">Sec</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <HolographicBeams density={15} speed={1.5} aberration={3} opacity={90} />
      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div className="eyebrow">
          <span className="dot"></span> INTERNAL SELECTION ROUND &nbsp;·&nbsp; SIH 2026
        </div>
        <h1>
          Pick a problem. <br />
          Build the <span className="accent">idea</span> that represents us.
        </h1>
        <p className="lede">
          Before any team from Mohamed Sathak College of Arts &amp; Science goes to the
          national Smart India Hackathon, it clears this round — the same 226 problem
          statements, the same PPT format, judged in‑house.
        </p>
        <div className="hero-actions">
          <a href="#problems" className="btn btn-primary">
            Browse problem statements ↓
          </a>
          <Link to="/register" className="btn btn-ghost">
            Register Now
          </Link>
        </div>
        <div className="stat-strip">
          <div className="stat">
            <div className="num">226</div>
            <div className="lab">Problem statements</div>
          </div>
          <div className="stat">
            <div className="num saffron">172</div>
            <div className="lab">Software track</div>
          </div>
          <div className="stat">
            <div className="num green">54</div>
            <div className="lab">Hardware track</div>
          </div>
          <div className="stat">
            <div className="num">18</div>
            <div className="lab">Themes covered</div>
          </div>
        </div>

        <div className="timer-section">
          <Countdown targetDate="2026-09-07T23:59:59" label="Last Date of Registration" date="07 September 2026" />
          <Countdown targetDate="2026-09-10T09:00:00" label="Event Date" date="10 September 2026" />
        </div>
      </div>
      <div className="hero-spline" style={{ zIndex: 10 }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="hero-spline-canvas"
        />
      </div>
    </section>
  )
}
