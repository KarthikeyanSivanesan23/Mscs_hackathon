import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Timeline from './components/Timeline'
import ProblemStatements from './components/ProblemStatements'
import Rules from './components/Rules'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function HomePage() {
  const [modalPs, setModalPs] = useState(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalPs(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <Hero />
      <Invitation />
      <Timeline />
      <ProblemStatements onOpenModal={setModalPs} />
      <Rules />
      <FAQ />
      <Modal ps={modalPs} onClose={() => setModalPs(null)} />
    </>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
